import styled from "styled-components";
import { Link } from "react-router-dom";

export const LayoutContainer = styled.div`
  min-width: 320px;
  max-width: 1440px;
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    max-width: 1184px;
    margin: 0 auto;
    justify-content: space-between;
    gap: 0px;
    margin-bottom: 30px;
  }
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const LinkLogo = styled(Link)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.primaryBlack};
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primaryYellow};
    text-decoration: underline;
  }
`;
