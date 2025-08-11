import { ErrorMessage, Field, Form } from "formik";
import styled from "styled-components";

export const ModalContainer = styled.div`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Header = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.8);
  margin-bottom: 20px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
`;

export const TeacherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TeacherTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #8a8a89;
`;

export const TeacherName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const QuestionTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
  font-weight: 400;
`;

export const RadioInput = styled(Field)`
  position: relative;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #8a8a89;
  border-radius: 50%;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked {
    border-color: ${({ theme }) => theme.primaryYellow};
    &::before {
      background-color: ${({ theme }) => theme.primaryYellow};
    }
  }
  @keyframes borderChange {
    from {
      border: 2px solid #8a8a89;
    }
    to {
      border-color: ${({ theme }) => theme.primaryYellow};
    }
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
  margin-top: -10px;
`;

export const StyledInput = styled(Field)`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: ${({ theme }) => theme.primaryBlack};
  }

  &:hover {
    border-color: ${({ theme }) => theme.primaryYellow};
    outline: ${({ theme }) => theme.primaryYellow};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryYellow};
  }
  @media screen and (min-width: 768px) {
    width: 438px;
  }
`;

export const StyledButton = styled.button`
  margin-top: 22px;
  border-radius: 12px;
  padding: 16px 24px;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.primaryYellow};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: ${({ theme }) => theme.primaryBlack};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
  }

  @media screen and (min-width: 768px) {
    width: 438px;
  }
`;
