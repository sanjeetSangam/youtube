import React from "react";
import { BsFilter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ resultData }) => {
  const navigate = useNavigate();
  function timeAgo(input) {
    const date = input instanceof Date ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat("en");
    const ranges = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    for (let key in ranges) {
      if (ranges[key] < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / ranges[key];
        return formatter.format(Math.round(delta), key);
      }
    }
  }

  return (
    <div className="searchResultContainer">
      <div className="searchContents">
        <div className="filter">
          <button>
            <BsFilter /> FILTERS
          </button>
        </div>

        <hr />

        <div className="resultsShown">
          {resultData &&
            resultData.map(({ snippet, id }) => {
              return (
                <div className="resultVideo" key={id.videoId}>
                  <div className="thumb">
                    <img
                      onClick={() => {
                        navigate(`/${id.videoId}`);
                      }}
                      src={snippet.thumbnails.high.url}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h3
                      onClick={() => {
                        navigate(`/${id.videoId}`);
                      }}
                    >
                      {snippet.title}
                    </h3>
                    <p>{timeAgo(snippet.publishedAt)}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
