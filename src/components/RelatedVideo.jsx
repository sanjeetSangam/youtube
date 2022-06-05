import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const RelatedVideo = () => {
  const [related, setRelated] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=AIzaSyCIWZm0KYz1ipQIJEEDTbDyX2-kbzPTvbg&maxResults=25`
        )
        .then(({ data }) => {
          console.log(data);
          setRelated(data.items);
        });
    }
  }, [id]);

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
    <div className="related">
      {related.length > 0 &&
        related.map(({ snippet, id }) => {
          return (
            <div className="related__video" key={id.videoId}>
              <img
                onClick={() => {
                  navigate(`/${id.videoId}`);
                }}
                src={snippet ? snippet.thumbnails.high.url : ""}
                alt=""
              />

              <div className="info">
                <strong>{snippet ? snippet.title : ""}</strong>
                <p>{snippet ? snippet.channelTitle : ""}</p>
                <p>{snippet ? timeAgo(snippet.publishTime) : ""}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
