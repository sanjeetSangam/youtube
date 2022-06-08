import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import "../styles/navbar.css";

import logo from "../assets/logo.png";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(undefined);

  const handleKeyword = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };
  return (
    <nav>
      <div className="logo">
        <AiOutlineMenu style={{ cursor: "pointer" }} />
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="search">
        <form action="" onSubmit={handleKeyword}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button onClick={handleKeyword}>
            <BiSearch />
          </button>
          <BsFillMicFill style={{ cursor: "pointer" }} />
        </form>
      </div>
      <div className="options">
        <RiVideoAddLine style={{ cursor: "pointer" }} />
        <CgMenuGridR style={{ cursor: "pointer" }} />
        <IoMdNotificationsOutline style={{ cursor: "pointer" }} />
        <Avatar src="" />
      </div>
    </nav>
  );
};
