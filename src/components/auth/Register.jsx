import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Formik } from "formik";

import { auth } from "../../firebase/config";
import { RegisterSchema } from "../../yupSchemas/AuthSchema";

import {
  Description,
  ErrorMessageWrapper,
  InputField,
  StyledForm,
  SubmitButton,
  Title,
} from "./Auth.styled";

export const Register = ({ handleClose }) => {
  const [isNameEntered, setNameEntered] = useState(false);
  const [isEmailEntered, setEmailEntered] = useState(false);
  const [isPasswordEntered, setPasswordEntered] = useState(false);

  const handleSubmit = (values) => {
    const { email, password } = values;

    // Check if Firebase is properly configured
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey || apiKey === "your-api-key-here") {
      toast.error("Firebase is not configured. Please set up your Firebase credentials.");
      console.error("Firebase configuration error: Missing or invalid API key");
      return;
    }

    console.log("Attempting to register user:", { email, name: values.name });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Registration successful:", userCredential.user);
        toast.success("Registration successful! Welcome to LearnLingo!");
        handleClose();
      })
      .catch((error) => {
        console.error("Registration error:", error);
        
        // Provide specific error messages
        let errorMessage = "Registration failed. Please try again.";
        
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = "This email is already registered. Please use a different email or try logging in.";
            break;
          case 'auth/invalid-email':
            errorMessage = "Please enter a valid email address.";
            break;
          case 'auth/weak-password':
            errorMessage = "Password is too weak. Please use at least 8 characters.";
            break;
          case 'auth/network-request-failed':
            errorMessage = "Network error. Please check your internet connection.";
            break;
          case 'auth/operation-not-allowed':
            errorMessage = "Email/password registration is not enabled. Please contact support.";
            break;
          default:
            errorMessage = `Registration failed: ${error.message}`;
        }
        
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            <InputField
              name="name"
              placeholder={isNameEntered ? "" : "Name"}
              onFocus={() => setNameEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="name" component="div" />
            <InputField
              type="email"
              name="email"
              placeholder={isEmailEntered ? "" : "Email"}
              onFocus={() => setEmailEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="email" component="div" />
            <InputField
              type="password"
              name="password"
              placeholder={isPasswordEntered ? "" : "Password"}
              onFocus={() => setPasswordEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="password" component="div" />
            <SubmitButton type="submit">Sign up</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
