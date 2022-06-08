import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResult } from "../components/SearchResult";
import { Sidebar } from "../components/Sidebar";

import "../styles/search.css";

export const Search = () => {
  const [resultData, setResultData] = useState([]);

  var key = import.meta.env.VITE_API_KEY;
  let { keyword } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?&q=${keyword}&key=${key}&type=video&maxResults=25&part=snippet`
      )
      .then(({ data }) => setResultData(data.items));
  }, [keyword]);

  return (
    <div className="container">
      <Sidebar />
      <SearchResult resultData={resultData} />
    </div>
  );
};
