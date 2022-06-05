import React from "react";
import { HomeContent } from "../components/HomeContent";
import { Sidebar } from "../components/Sidebar";

import "../styles/home.css"

export const Home = () => {
  return (
    <div className="container" >
      <Sidebar />
      <HomeContent />
    </div>
  );
};
