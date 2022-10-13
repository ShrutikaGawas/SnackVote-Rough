import React from "react";
import "./Home.css";
import Bowl from "../assets/Bowl.png";
import Berries from "../assets/Berries.png";
import { useAuth } from "./AuthProvider";

const Home = () => {
  const auth = useAuth();

  return (
    <div className="flex-container">
      <div className="text-container">
        <h1 className="heading">Vote for your favourite Food</h1>
        <p>
          Same old Bhaji-Pav, Vadas and Sandwiches? Bored of the cafeteria menu?
          Don’t worry we got it all sorted. Now vote for your favourite food
          with just a click on your device. We got your back people, we care for
          your survival.
        </p>

        <img style={{ marginTop: 20 }} src={Berries} alt="" />
      </div>
      <div className="image-container">
        <img src={Bowl} alt="" />
      </div>
    </div>
  );
};

export default Home;
