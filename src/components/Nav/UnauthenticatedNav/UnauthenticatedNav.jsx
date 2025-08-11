import { FiLogIn } from "react-icons/fi";
import {
  LogButton,
  NavList,
  RegisterButton,
  StyledLink,
  UserList,
  UserSection,
} from "../AuthenticatedNav/AuthenticatedNav.styled";
import { useLocation } from "react-router-dom";

const UnauthenticatedNav = ({ onClickLogin, handleRegisterClick }) => {
  const location = useLocation();
  return (
    <>
      <NavList>
        <li>
          <StyledLink
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/teachers"
            className={location.pathname === "/teachers" ? "active" : ""}
          >
            Teachers
          </StyledLink>
        </li>
      </NavList>
      <UserSection>
        <UserList>
          <li>
            <LogButton type="button" onClick={onClickLogin}>
              <FiLogIn size="20px" color="#F4C550" />
              Log in
            </LogButton>
          </li>
          <li>
            <RegisterButton type="button" onClick={handleRegisterClick}>
              Registration
            </RegisterButton>
          </li>
        </UserList>
      </UserSection>
    </>
  );
};

export default UnauthenticatedNav;
