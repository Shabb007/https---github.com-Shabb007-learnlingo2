import { ErrorMessage, Field, Form } from "formik";

import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 40px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputField = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  height: 54px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.primaryBlack};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryYellow};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryYellow};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primaryLightYellow};
  }

  @media screen and (min-width: 768px) {
    width: 438px;
  }
`;

export const ErrorMessageWrapper = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
  margin-top: -10px;
`;

export const SubmitButton = styled.button`
  margin-top: 22px;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.primaryYellow};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: ${({ theme }) => theme.primaryBlack};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 438px;
  }
`;
