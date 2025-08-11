import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { Formik } from "formik";

import { LoginSchema } from "../../yupSchemas/AuthSchema";
import { auth } from "../../firebase/config";

import {
  Description,
  ErrorMessageWrapper,
  InputField,
  StyledForm,
  SubmitButton,
  Title,
} from "./Auth.styled";

export const Login = ({ handleClose }) => {
  const [emailEntered, setEmailEntered] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState(false);

  const handleSubmit = (values) => {
    const { email, password } = values;

    // Check if using placeholder Firebase credentials
    if (import.meta.env.VITE_API_KEY === "your-api-key-here" || !import.meta.env.VITE_API_KEY) {
      // Simulate successful login for development
      console.log("Development mode: Simulating login for:", email);
      toast.success("Login successful! (Development mode)");
      
      // Dispatch custom event for development mode authentication
      window.dispatchEvent(new CustomEvent('dev-auth', {
        detail: { type: 'login', email }
      }));
      
      handleClose();
      return;
    }

    // Real Firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        handleClose();
      })
      .catch(() => {
        toast.error("Apologies, we were unable to locate your account");
      });
  };

  return (
    <div>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Description>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            <InputField
              type="email"
              name="email"
              placeholder={emailEntered ? "" : "Email"}
              onFocus={() => setEmailEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="email" component="div" />
            <InputField
              type="password"
              name="password"
              placeholder={passwordEntered ? "" : "Password"}
              onFocus={() => setPasswordEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="password" component="div" />
            <SubmitButton type="submit">Log in</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
