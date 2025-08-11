import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { selectFavorites } from "../../redux/selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorite/favoriteSlice";

import Modal from "../Modal/Modal";
import BookTrialModal from "../BookTrialModal/BookTrialModal";

// SVG Components for Vite compatibility
const Book = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.667 4.133c0-.746 0-1.12-.146-1.405a1.333 1.333 0 0 0-.582-.583C13.653 2 13.28 2 12.533 2h-.266c-1.494 0-2.24 0-2.811.29-.502.256-.91.664-1.165 1.166C8 4.026 8 4.773 8 6.266V14l.067-.1c.463-.695.694-1.042 1-1.293.271-.223.583-.39.919-.492.378-.115.796-.115 1.63-.115h.917c.747 0 1.12 0 1.406-.145.25-.128.454-.332.582-.583.146-.285.146-.659.146-1.405V4.133ZM1.333 4.133c0-.746 0-1.12.146-1.405.127-.25.331-.455.582-.583C2.347 2 2.72 2 3.467 2h.266c1.494 0 2.24 0 2.81.29.503.256.91.664 1.166 1.166C8 4.026 8 4.773 8 6.266V14l-.067-.1c-.463-.695-.694-1.042-1-1.293a2.665 2.665 0 0 0-.919-.492C5.635 12 5.218 12 4.384 12h-.917c-.747 0-1.12 0-1.406-.145a1.334 1.334 0 0 1-.582-.583c-.146-.285-.146-.659-.146-1.405V4.133Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Star = () => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <path d="M6.2 4.697 8 1.286l1.8 3.411c.159.302.45.512.785.57l3.8.658-2.688 2.766a1.1 1.1 0 0 0-.3.923l.55 3.818-3.462-1.702a1.1 1.1 0 0 0-.97 0l-3.462 1.702.55-3.818a1.1 1.1 0 0 0-.3-.923L1.614 5.925l3.8-.657a1.1 1.1 0 0 0 .786-.571Z" fill="#FFC531" stroke="#FFC531" strokeWidth="1.2"/>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z"/>
      </clipPath>
    </defs>
  </svg>
);
import {
  CardImage,
  CardInfoContainer,
  FavoriteButton,
  Heart,
  HeartDel,
  ImageContainer,
  InfoList,
  InfoListItem,
  InfoListItemContent,
  InfoParagraph,
  InfoSection,
  LanguageList,
  PricePerHour,
  ReviewComment,
  ReviewContainer,
  ReviewList,
  ReviewRating,
  ReviewerAvatar,
  ReviewerInfo,
  StyledBookTrialButton,
  StyledButton,
  StyledDiv,
  StyledLevelsList,
  StyledLevelsListItem,
  StyledList,
  StyledListItem,
  StyledParagraph,
  StyledSpan,
  TeacherName,
} from "./Card.styled";

const Card = ({ teacher, authUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleBookTrialClick = (teacher) => {
    setSelectedTeacher(teacher);
    toggleModal();
  };

  const close = () => {
    setIsModalOpen(false);
  };

  const handleReadMoreClick = (teacherId) => {
    setExpandedTeacherId((prevId) => (prevId === teacherId ? null : teacherId));
  };

  const getButtonText = (teacherId) =>
    expandedTeacherId === teacherId ? "Hide more" : "Read More";

  const isFavorite = favorites.includes(teacher.id);

  const onSwitchFavorite = () => {
    if (!authUser) {
      toast.error("At first, you must log in", {
        icon: "❗",
      });
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(teacher.id));
    } else {
      dispatch(addFavorite(teacher.id));
    }
  };

  return (
    <>
      <ImageContainer>
        <CardImage
          src={teacher.avatar_url}
          loading="lazy"
          alt={`${teacher.name} ${teacher.surname}`}
          width="96"
          height="96"
          onError={(e) => {
            console.log("Image failed to load:", teacher.avatar_url);
            e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face";
          }}
        />
      </ImageContainer>
      <CardInfoContainer>
        <InfoSection>
          <InfoParagraph>Languages</InfoParagraph>
          <InfoList>
            <InfoListItem>
              <InfoListItemContent>
                {" "}
                <Book /> Lessons online
              </InfoListItemContent>
            </InfoListItem>
            <InfoListItem>Lessons done: {teacher.lessons_done}</InfoListItem>
            <InfoListItem>
              <InfoListItemContent>
                {" "}
                <Star /> Rating: {teacher.rating}
              </InfoListItemContent>
            </InfoListItem>
            <InfoListItem>
              Price / 1 hour:{" "}
              <PricePerHour>{teacher.price_per_hour}$</PricePerHour>
            </InfoListItem>
            <li>
              {" "}
              {isFavorite && authUser ? (
                <FavoriteButton type="button" onClick={onSwitchFavorite}>
                  <HeartDel />
                </FavoriteButton>
              ) : (
                <FavoriteButton type="button" onClick={onSwitchFavorite}>
                  {" "}
                  <Heart />{" "}
                </FavoriteButton>
              )}
            </li>
          </InfoList>
        </InfoSection>

        <TeacherName>
          {" "}
          {teacher.name} {teacher.surname}{" "}
        </TeacherName>
        <StyledList>
          <StyledListItem>
            <StyledDiv>
              <StyledSpan>Speaks: &nbsp;</StyledSpan>
              <LanguageList>
                {teacher.languages ? (
                  teacher.languages.map((language, index, array) => (
                    <React.Fragment key={language}>
                      <li>{language}</li>
                      {index < array.length - 1 && <span>, &nbsp;</span>}
                    </React.Fragment>
                  ))
                ) : (
                  <li>No languages available</li>
                )}
              </LanguageList>
            </StyledDiv>
          </StyledListItem>
          <StyledListItem>
            <StyledSpan>Lesson info:</StyledSpan> {teacher.lesson_info}
          </StyledListItem>
          <StyledListItem>
            <StyledSpan>Conditions:</StyledSpan> {teacher.conditions}
          </StyledListItem>
        </StyledList>
        {expandedTeacherId === teacher.id && (
          <div>
            <StyledParagraph>{teacher.experience}</StyledParagraph>
            <ReviewList>
              {teacher.reviews ? (
                teacher.reviews.map((review, index) => (
                  <li key={index}>
                    <ReviewContainer>
                      <ReviewerAvatar
                        src={`https://images.unsplash.com/photo-${1500000000000 + index * 1000000}?w=44&h=44&fit=crop&crop=face`}
                        alt="avatar"
                        width="44"
                        height="44"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=44&h=44&fit=crop&crop=face";
                        }}
                      />
                      <ReviewerInfo>
                        <p>{review.reviewer_name}</p>
                        <ReviewRating>
                          <Star />
                          <p> {review.reviewer_rating}</p>
                        </ReviewRating>
                      </ReviewerInfo>
                    </ReviewContainer>
                    <ReviewComment>{review.comment}</ReviewComment>
                  </li>
                ))
              ) : (
                <li>There are no reviews yet</li>
              )}
            </ReviewList>
          </div>
        )}
        <StyledButton onClick={() => handleReadMoreClick(teacher.id)}>
          {" "}
          {getButtonText(teacher.id)}
        </StyledButton>
        <StyledLevelsList>
          {teacher.levels ? (
            teacher.levels.map((level, index) => (
              <StyledLevelsListItem key={index}>
                <p>{level}</p>
              </StyledLevelsListItem>
            ))
          ) : (
            <li>No levels</li>
          )}
        </StyledLevelsList>
        {expandedTeacherId === teacher.id && (
          <StyledBookTrialButton
            type="button"
            onClick={() => handleBookTrialClick(teacher)}
          >
            Book trial lesson
          </StyledBookTrialButton>
        )}
      </CardInfoContainer>
      {isModalOpen && selectedTeacher && (
        <Modal toggleModal={toggleModal}>
          <BookTrialModal teacher={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};

export default Card;
