const express = require("express");
const { User, validate } = require("../models/user");
const { Cv } = require("../models/cv");
const cloudinary = require("cloudinary").v2;

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dh8aemmkc",
  api_key: 175951413584161,
  api_secret: "H_NzmnwTakj9zjYOhY_672-KmRo",
});

// CREATE a new cv
router.post("/", async (req, res) => {
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) return res.status(400).send("User already registered.");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const {
    InternshipRequestLetterLink,
    cvLink,
    policeCertificateLink,
    nicLink,
  } = req.body;

  let newBody = { ...req.body };

  if (InternshipRequestLetterLink) {
    const InternshipRequestLetterLinkResult = await cloudinary.uploader.upload(
      req.body.InternshipRequestLetterLink,
      { folder: "InternshipRequestLetter" }
    );
    newBody.InternshipRequestLetterLink =
      InternshipRequestLetterLinkResult.secure_url;
  }

  if (cvLink) {
    const cvLinkResult = await cloudinary.uploader.upload(req.body.cvLink, {
      folder: "cv",
    });
    newBody.cvLink = cvLinkResult.secure_url;
  }

  if (policeCertificateLink) {
    const policeCertificateLinkResult = await cloudinary.uploader.upload(
      req.body.policeCertificateLink,
      {
        folder: "policeCertificate",
      }
    );
    newBody.policeCertificateLink = policeCertificateLinkResult.secure_url;
  }

  if (nicLink) {
    const nicLinkResult = await cloudinary.uploader.upload(req.body.nicLink, {
      folder: "nic",
    });
    newBody.nicLink = nicLinkResult.secure_url;
  }

  let user = new User({
    username: newBody.username || "",
    fullName: newBody.fullName,
    password: newBody.password || "",
    nameWithInitials: newBody.nameWithInitials,
    postalAddress: newBody.postalAddress,
    district: newBody.district,
    nic: newBody.nic,
    dateOfBirth: newBody.dateOfBirth,
    mobileNo: newBody.mobileNo,
    email: newBody.email,
    role: newBody.role,
  });

  let {
    username,
    fullName,
    password,
    nameWithInitials,
    postalAddress,
    district,
    nic,
    dateOfBirth,
    mobileNo,
    email,
    role,
    ...newCvBody
  } = newBody;

  const cv = new Cv({
    user: user._id,
    ...newCvBody,
  });

  try {
    await user.save();
    await cv.save();
    res.status(201).send(cv);
  } catch (err) {
    res.status(500).send("Error creating the user: " + err.message);
  }
});

module.exports = router;
