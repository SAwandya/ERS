import React from 'react'
import ReusableForm from '../ReusableForm';

const AddNewCv = () => {

  const onSubmit = (data) => console.log(data);

  const fields1 = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
  ];

  const fields2 = [
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    { name: "dob", label: "Date of Birth", type: "date" },
  ];


  return (
    <div>
      <h2>Form 1</h2>
      <ReusableForm fields={fields1} onSubmit={onSubmit} />
      <h2>Form 2</h2>
      <ReusableForm fields={fields2} onSubmit={onSubmit} />
    </div>
  );
};

export default AddNewCv;