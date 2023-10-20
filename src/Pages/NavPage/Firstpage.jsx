import React, { useState, useEffect } from "react";
import Page from "../../Components/NavComp/Firstcomponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Firstpage = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const currentToken = await firebaseUser.getIdToken();
        setUser(firebaseUser);
        setToken(currentToken);
        localStorage.setItem("userToken", currentToken);
      } else {
        setUser(null);
        setToken(null);
        localStorage.removeItem("userToken");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (loading) return;
    const interval = setInterval(() => {
      if (token) {
        axios
          .post("http://localhost:4000/verify-token", { token: token })
          .then((response) => {
            if (!response.data.isValid) {
              auth.signOut();
            }
          })
          .catch((error) => {
            console.error("Token verification failed:", error);
          });
      }
    }, 2400000);
    return () => clearInterval(interval);
  }, [token, loading, navigate]);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const token = await user.getIdToken();
      setUser(user);
      setToken(token);
      localStorage.setItem("userToken", token);
      navigate("/Blog");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    setToken(null);
    localStorage.removeItem("userToken");
    navigate("/Contact");
  };
  
  if (loading) return null;

  return (
    <>
      <Page user={user} onSignIn={handleSignIn} onLogout={handleLogout} />
    </>
  );
};

export default Firstpage;
