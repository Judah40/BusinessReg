"use client";

import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

const BusinessRegStep1 = () => {
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
      <form className="space-y-6">
        <div className="w-[400px] flex flex-row space-x-5">
          <div>
            <Field
              style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              className="w-[190px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
              placeholder="First Name"
              type="password"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <Field
              style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
              className="w-[190px]  p-2 active:border-b-2 active:border-b-[#2B5E2E]"
              placeholder="Last Name"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
        </div>
        <div>
          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 "
            placeholder="email"
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            placeholder="Occupation"
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage name="email" component="div" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="DOB">Date Of Birth:</label>
          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px]  p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            type="date"
            id="DOB"
            name="DOB"
          />
          <ErrorMessage name="DOB" component="div" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">Nationality</label>

          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 "
            placeholder="Nationality"
            as="select"
            id="name"
            name="name"
          >
            <option value="red">Sierra Leone</option>
            <option value="green">Ghana</option>
            <option value="blue">Nigeria</option>
          </Field>
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <Field
            style={{ background: "rgba(255, 255, 255, 0.1)", color: "white" }}
            className="w-[400px] p-2 active:border-b-2 active:border-b-[#2B5E2E]"
            placeholder="Address"
            type="email"
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

export default BusinessRegStep1;
