import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 20px;
`;

export const LoadMoreButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  border-radius: 12px;
  padding: 16px 48px;
  width: 232px;
  height: 60px;
  background: ${({ theme }) => theme.primaryYellow};
  margin-bottom: 32px;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
  }
`;
