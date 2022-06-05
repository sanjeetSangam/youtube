import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Cards = ({
  thumbnail,
  title,
  views,
  uploadTimes,
  channelName,
  channelAvatar,
  id,
}) => {
  const formatViews = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

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
    <div className="card">
      <img
        src={thumbnail}
        alt=""
        onClick={() => {
          navigate(`/${id}`);
        }}
      />

      <div className="card__details">
        <Avatar
          src={
            channelAvatar
              ? channelAvatar.items[0].snippet.thumbnails.high.url
              : ""
          }
        />

        <div className="card__info">
          <h4 style={{ cursor: "pointer" }}>{title}</h4>
          <p>{channelName}</p>
          <p>
            {formatViews(views)} - <span>{timeAgo(uploadTimes)}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
