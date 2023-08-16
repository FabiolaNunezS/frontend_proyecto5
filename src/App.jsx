import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <MainRoutes setUser={setUser} user={user} />
      <Footer />
    </>
  );
}

export default App;
