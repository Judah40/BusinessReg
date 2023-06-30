"use client";

import React, { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const BusinessRegStepForm2 = () => {
  const [value, setValue] = useState("");

  // Login with google

 

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <form className="space-y-8">
        <div>
          <PhoneInput
            containerStyle={{
              backgroundColor: "gray",
              width: "400px",
              border: "none",
            }}
            inputStyle={{
              width: "400px",
              color: "white",
              background: "rgba(255, 255, 255, 0.1)",
              border: "none",
            }}
            dropdownStyle={{ color: "#424242" }}
            placeholder="Enter phone number"
            value={value}
            onChange={(phone) => setValue(phone)}
          />
        </div>

        <div>
          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px]  p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            placeholder="Business Name"
            type="text"
            id="DOB"
            name="DOB"
          />
        </div>

        <div className="flex space-x-8">
          <div className="flex space-x-2">
            <Field
              style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              className=" p-2 active:border-b-2 active:border-b-[#2B5E2E]"
              type="radio"
              id="email"
              name="email"
            />
            <p>Sole proprietorship</p>
          </div>
          <div className="flex space-x-2">
            <Field
              style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              className=" p-2 active:border-b-2 active:border-b-[#2B5E2E]"
              type="radio"
              id="email"
              name="email"
            />
            <p>Partnership Corporation</p>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">Upload M&A</label>

          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            placeholder="Address"
            type="file"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Upload Passport</label>

          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            placeholder="Address"
            type="file"
            id="email"
            name="email"
          />
        </div>

        <div className=" justify-end items-end flex">
            <button
              className="w-[100px] text-white bg-[#FFA000] h-8 rounded"
              type="submit"
            >
              Next
            </button>
        </div>
      </form>
    </Formik>
  );
};

export default BusinessRegStepForm2;
