import { FiHeart } from "react-icons/fi";
import styled from "styled-components";

export const ImageContainer = styled.div`
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.lightYellow};
  position: relative;
  border-radius: 50%;
  padding: 10px;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    background: #38cd3e;
    right: 23px;
    top: 19px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    padding: 0;
  }
`;

export const CardImage = styled.img`
  border-radius: 50%;
`;

export const CardInfoContainer = styled.div`
  width: 100%;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1140px) {
    margin-top: 0;
  }
`;

export const InfoParagraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  text-align: center;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 1140px) {
    gap: 16px;
  }
`;

export const InfoListItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  padding-right: 4px;

  @media screen and (min-width: 768px) {
    padding-right: 16px;
    border-right: 1px solid rgba(18, 20, 23, 0.2);

    &:last-child {
      border-right: none;
      padding-right: 0;
    }

    &:nth-child(4) {
      border-right: none;
      padding-right: 0;
    }
  }
`;

export const InfoListItemContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PricePerHour = styled.span`
  color: #38cd3e;
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  @media screen and (min-width: 1140px) {
    margin-left: 48px;
  }
`;

export const HeartDel = styled(FiHeart)`
  fill: ${({ theme }) => theme.primaryYellow};
  color: ${({ theme }) => theme.primaryYellow};
  width: 26px;
  height: 26px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: ${({ theme }) => theme.primaryYellowHover};
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
    fill: white;
  }
`;

export const Heart = styled(FiHeart)`
  fill: none;
  width: 26px;
  height: 26px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: ${({ theme }) => theme.primaryBlue};
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
    fill: #3470ff;
  }
`;

// Language block

export const TeacherName = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    text-align: start;
  }
`;

export const StyledList = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledListItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const StyledDiv = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  color: #8a8a89;
`;

export const LanguageList = styled.ul`
  display: flex;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

// Experience block

export const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ReviewerAvatar = styled.img`
  border-radius: 50%;
`;

export const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewRating = styled.div`
  display: flex;
  margin-top: 2px;
  gap: 8px;
`;

export const ReviewComment = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

// Load more
export const StyledButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  background: transparent;
  margin-top: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryYellow};
  }
`;

// levels
export const StyledLevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  gap: 8px;
`;

export const StyledLevelsListItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;
  height: 100%;
`;

// Trial
export const StyledBookTrialButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 156%;
  border-radius: 12px;
  padding: 16px 48px;
  width: 232px;
  height: 60px;
  background: ${({ theme }) => theme.primaryYellow};
  margin-top: 32px;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryLightYellow};
  }
`;
