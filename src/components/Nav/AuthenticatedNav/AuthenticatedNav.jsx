import { auth } from "../../../firebase/config";
import { signOut } from "firebase/auth";

import {
  LogButton,
  NavList,
  StyledLink,
  UserList,
  UserSection,
} from "./AuthenticatedNav.styled";
import { FiLogOut } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export const AuthenticatedNav = () => {
  const handleLogOUt = () => {
    // Check if using placeholder Firebase credentials
    if (import.meta.env.VITE_API_KEY === "your-api-key-here" || !import.meta.env.VITE_API_KEY) {
      // Simulate logout for development
      console.log("Development mode: Simulating logout");
      window.dispatchEvent(new CustomEvent('dev-auth', {
        detail: { type: 'logout' }
      }));
      return;
    }

    // Real Firebase logout
    signOut(auth);
  };
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
        <li>
          <StyledLink
            to="/favorites"
            className={location.pathname === "/favorites" ? "active" : ""}
          >
            Favorites
          </StyledLink>
        </li>
      </NavList>
      <UserSection>
        <UserList>
          <li>
            <LogButton onClick={handleLogOUt}>
              <FiLogOut size="20px" color="#F4C550" />
              Log out
            </LogButton>
          </li>
        </UserList>
      </UserSection>
    </>
  );
};

export default AuthenticatedNav;
