import AuthenticatedNav from "./AuthenticatedNav/AuthenticatedNav";
import UnauthenticatedNav from "./UnauthenticatedNav/UnauthenticatedNav";

export const Navigation = ({ onClickLogin, handleRegisterClick, authUser }) => {
  return authUser ? (
    <AuthenticatedNav />
  ) : (
    <UnauthenticatedNav
      onClickLogin={onClickLogin}
      handleRegisterClick={handleRegisterClick}
    />
  );
};
