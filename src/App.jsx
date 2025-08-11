import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase/config";
import { lazy, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import Layout from "./components/Layout/Layout";
import { PrivateRoute } from "./components/Nav/PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));

function App() {
  const [authUser, setAuthUser] = useState(auth.currentUser);
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    // Check if we're in development mode (no real Firebase credentials)
    if (import.meta.env.VITE_API_KEY === "your-api-key-here" || !import.meta.env.VITE_API_KEY) {
      setDevMode(true);
      console.log("Development mode: Authentication will be simulated");
      return;
    }

    // Real Firebase authentication
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  // Development mode authentication simulation
  useEffect(() => {
    if (devMode) {
      // Listen for custom events from login/register components
      const handleDevAuth = (event) => {
        if (event.detail.type === 'login' || event.detail.type === 'register') {
          setAuthUser({ 
            uid: 'dev-user-123', 
            email: event.detail.email,
            displayName: event.detail.name || 'Development User'
          });
        } else if (event.detail.type === 'logout') {
          setAuthUser(null);
        }
      };

      window.addEventListener('dev-auth', handleDevAuth);
      return () => window.removeEventListener('dev-auth', handleDevAuth);
    }
  }, [devMode]);

  return (
    <Routes>
      <Route path="/" element={<Layout authUser={authUser} />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers authUser={authUser} />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute authUser={authUser}>
              <Favorite authUser={authUser} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
