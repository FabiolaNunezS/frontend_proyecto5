import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const setAuth = (token) => {
    setAuthToken(token);
  };

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      {authToken ? (
        <Profile authToken={authToken} />
      ) : (
        <MainRoutes setUser={setUser} user={user} />
      )}
      <Footer />
    </>
  );
}

export default App;
