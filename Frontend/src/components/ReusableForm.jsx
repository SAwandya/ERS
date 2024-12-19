import React from "react";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { Button } from "@mui/material";

const ReusableForm = ({ fields, onSubmit }) => {
  const { handleSubmit, control } = useForm(); // `control` comes from useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields?.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          options={field.options}
          control={control} // Pass the control prop here
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReusableForm;
