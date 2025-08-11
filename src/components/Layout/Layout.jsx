import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";

import { Navigation } from "../Nav/Navigation";
import Modal from "../Modal/Modal";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";

import { Header, LayoutContainer, LinkLogo, List, Logo } from "./Layout.styled";
import UkraineLogo from "../../img/icons/ukraine.svg";

const Layout = ({ authUser }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Check if in development mode
  const isDevMode = import.meta.env.VITE_API_KEY === "your-api-key-here" || !import.meta.env.VITE_API_KEY;

  const toggleModal = () => {
    setIsPanelOpen((prevState) => !prevState);
  };

  function onClickLogin() {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
    toggleModal();
  }

  function handleRegisterClick() {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
    toggleModal();
  }

  const handleClose = () => {
    setIsPanelOpen(false);
  };

  return (
    <LayoutContainer>
      <Header>
        <List>
          <li>
            <NavLink to="/">
              <Logo src={UkraineLogo} alt="logo" />
            </NavLink>
          </li>
          <li>
            <LinkLogo to="/">LearnLingo</LinkLogo>
          </li>
        </List>
        <Navigation
          authUser={authUser}
          onClickLogin={onClickLogin}
          handleRegisterClick={handleRegisterClick}
        />
        {isDevMode && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#F4C550',
            color: '#121417',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            DEV MODE
          </div>
        )}
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />

      {isPanelOpen && (
        <Modal toggleModal={toggleModal}>
          {isLoginModalOpen && <Login handleClose={handleClose} />}
          {isRegisterModalOpen && <Register handleClose={handleClose} />}
        </Modal>
      )}
    </LayoutContainer>
  );
};

export default Layout;
