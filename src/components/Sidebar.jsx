import React from "react";
import { AiFillHome, AiOutlineHistory } from "react-icons/ai";
import { SiAirplayvideo } from "react-icons/si";
import { ImFileVideo } from "react-icons/im";
import { BiLike, BiHistory } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdOutlineSlowMotionVideo,
  MdPersonalVideo,
} from "react-icons/md";

import "../styles/sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="main__menus">
        <div className="side__menus">
          <AiFillHome />
          <p>Home</p>
        </div>
        <div className="side__menus">
          <MdOutlineExplore />
          <p> Explore</p>
        </div>
        <div className="side__menus">
          <MdOutlineSlowMotionVideo />
          <p>Shorts</p>
        </div>
        <div className="side__menus">
          <SiAirplayvideo />
          <p>Subscriptions</p>
        </div>
      </div>

      <hr
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />

      <div className="main__menus bottom">
        <div className="side__menus">
          <ImFileVideo />
          <p>Library</p>
        </div>
        <div className="side__menus">
          <AiOutlineHistory />
          <p>History</p>
        </div>
        <div className="side__menus">
          <MdPersonalVideo />
          <p>Your videos</p>
        </div>
        <div className="side__menus">
          <SiAirplayvideo />
          <p>Your movies</p>
        </div>
        <div className="side__menus">
          <BiHistory />
          <p>Watch later</p>
        </div>
        <div className="side__menus">
          <BiLike />
          <p> Liked videos</p>
        </div>
      </div>

      <hr
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
    </div>
  );
};
