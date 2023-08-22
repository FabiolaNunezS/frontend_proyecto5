import { useContext } from "react";
import { UserContext } from "../context/user/userContext";
import { Principal } from "../components/Principal";
import { Carousel } from "../components/Carousel";

export const HomePage = () => {
  const [user] = useContext(UserContext);

  return (
    <>
      <main>
        <Carousel />
        <Principal />
        {JSON.stringify(user, null, 2)}
      </main>
    </>
  );
};
