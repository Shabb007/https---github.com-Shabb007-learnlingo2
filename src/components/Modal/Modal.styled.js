import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 290px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  background-color: #ffffff;
  border-radius: 30px;
  max-height: 100vh;
  padding: 32px;

  @media screen and (min-width: 768px) {
    width: 566px;
    padding: 64px;
  }
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
