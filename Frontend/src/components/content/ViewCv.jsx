import React from "react";

const ViewCv = ({ cvLink }) => {
  console.log(cvLink);
  return <iframe src={cvLink} width="100%" height="500px" title="CV"></iframe>;
};

export default ViewCv;
