import { Link } from "react-router-dom";
import styled from "styled-components";
import rectangleYellow3 from "../../img/rectangle-yellow3.png";
import rectangleYellow from "../../img/rectangle-yellow.png";

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  border-radius: 30px;
  background: #f8f8f8;
  width: 100%;
  padding-left: 5px;
  max-width: 320px;
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1400px) {
    min-width: 330px;
    max-width: 720px;
    height: 530px;
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.02em;
  font-size: 28px;
  margin-top: 50px;
  text-align: center;

  @media screen and (min-width: 1400px) {
    max-width: 548px;
    margin-top: 105px;
    font-size: 48px;
    text-align: start;
  }
`;

export const HighlightSpan = styled.span`
  font-style: italic;
  font-weight: 400;
  background: ${({ theme }) => theme.lightYellow};
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: 1400px) {
    width: 471px;
    text-align: start;
    margin-bottom: 20px;
  }
`;

export const CustomLink = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.56;
  border-radius: 12px;
  padding: 16px 48px;
  color: ${({ theme }) => theme.primaryBlack};
  background: ${({ theme }) => theme.primaryYellow};
  margin-bottom: 20px;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.primaryYellow};
    background: ${({ theme }) => theme.lightYellow};
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 1140px) {
    font-size: 18px;
    padding: 16px 88px;
    width: 267px;
    height: 60px;
    margin-bottom: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 30px;
  max-width: 568px;
  height: 450px;
  background: ${({ theme }) => theme.lightYellow};

  @media screen and (min-width: 1140px) {
    width: 568px;
    height: 530px;
  }
`;

export const ImageGirl = styled.img`
  left: 25%;
  width: 250px;
  margin-top: 50px;

  @media screen and (min-width: 1140px) {
    margin-left: 114px;
    margin-top: 80px;
    width: auto;
    height: auto;
  }
`;

export const ImageMac = styled.img`
  position: absolute;
  left: 0;
  top: 270px;
  z-index: 1;
  width: 250px;

  @media screen and (min-width: 1140px) {
    top: 354px;
    left: 105px;
    width: auto;
  }
`;

export const AdvantagesSection = styled.div`
  background-image: url(${rectangleYellow3});
  margin-top: 24px;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    background-image: url(${rectangleYellow});
    background-size: contain;
    height: 100%;
    padding: 25px;
    margin-left: 0px;
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 122px 40px 123px;
    width: 100%;
    margin-left: 30px;
  }
`;

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  }
`;

export const StatItem = styled.li`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StatNumber = styled.p`
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.02em;
  font-size: 20px;

  @media screen and (min-width: 1140px) {
    font-size: 28px;
  }
`;

export const StatText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
  white-space: pre-line;
`;

export const HighlightedText = styled.span`
  display: block;
`;
