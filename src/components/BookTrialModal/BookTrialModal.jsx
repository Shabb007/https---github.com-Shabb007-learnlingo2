import { Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { BookingLessonSchema } from "../../yupSchemas/BookingLessonSchema";

import {
  AvatarContainer,
  AvatarImage,
  ErrorText,
  Header,
  ModalContainer,
  Paragraph,
  QuestionTitle,
  RadioGroup,
  RadioInput,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  TeacherInfoContainer,
  TeacherName,
  TeacherTitle,
} from "./BookTrialModal.styled";

const BookTrialModal = ({ teacher, handleClose }) => {
  const [nameInputted, setNameInputted] = useState(false);
  const [emailInputted, setEmailInputted] = useState(false);
  const [phoneInputted, setPhoneInputted] = useState(false);

  const handleBookingSubmission = () => {
    toast.success("Successfully finished!");
    handleClose();
  };
  return (
    <ModalContainer>
      <Header>Book trial lesson</Header>
      <Paragraph>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Paragraph>
      <AvatarContainer>
        <AvatarImage
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="44"
          height="44"
        />
        <TeacherInfoContainer>
          <TeacherTitle>Your teacher</TeacherTitle>
          <TeacherName>
            {teacher.name} {teacher.surname}
          </TeacherName>
        </TeacherInfoContainer>
      </AvatarContainer>
      <QuestionTitle>
        What is your main reason for learning English?
      </QuestionTitle>
      <Formik
        initialValues={{
          picked: "",
          fullname: "",
          email: "",
          phoneNuber: "",
        }}
        onSubmit={handleBookingSubmission}
        validationSchema={BookingLessonSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <StyledForm>
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              <StyledLabel>
                <RadioInput
                  type="radio"
                  name="picked"
                  value="Career and business"
                />
                Career and business
              </StyledLabel>
              <StyledLabel>
                <RadioInput
                  type="radio"
                  name="picked"
                  value="Lesson for kids"
                />
                Lesson for kids
              </StyledLabel>
              <StyledLabel>
                <RadioInput type="radio" name="picked" value="Living abroad" />
                Living abroad
              </StyledLabel>
              <StyledLabel>
                <RadioInput
                  type="radio"
                  name="picked"
                  value="Exams and coursework"
                />
                Exams and coursework
              </StyledLabel>
              <StyledLabel>
                <RadioInput
                  type="radio"
                  name="picked"
                  value="Culture, travel or hobby"
                />
                Culture, travel or hobby
              </StyledLabel>
              <ErrorText name="picked" component="div" />
            </RadioGroup>
            <StyledInput
              name="fullname"
              placeholder={nameInputted ? "" : "Full Name"}
              onFocus={() => setNameInputted(true)}
            />
            <ErrorText name="fullname" component="div" />
            <StyledInput
              type="email"
              name="email"
              placeholder={emailInputted ? "" : "Email"}
              onFocus={() => setEmailInputted(true)}
            />
            <ErrorText name="email" component="div" />
            <StyledInput
              type="tel"
              name="phoneNuber"
              placeholder={phoneInputted ? "" : "Phone number"}
              onFocus={() => setPhoneInputted(true)}
            />
            <ErrorText name="phoneNuber" component="div" />
            <StyledButton type="submit">Book</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default BookTrialModal;
