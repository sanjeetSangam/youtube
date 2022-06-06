import axios from "axios";
import React, { useEffect, useState } from "react";

import "../styles/content.css";
import { Cards } from "./Cards";

const arr = [
  "All",
  "Gaming",
  "Battlegrounds Mobile India",
  "Javascript",
  "Live",
  "Comedians",
  "PUBG Mobile",
  "Trailers",
  "Gadgets",
  "Superhero Movies",
  "Thrillers",
];

export const HomeContent = () => {
  const [initialData, setInitialData] = useState([]);
  const [channelAvatar, setChannelAvatar] = useState([]);

  var key = import.meta.env.VITE_API_KEY;
  // console.log({ key: key });

  const popularData = async () => {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${key}&maxResults=25`
    );

    setInitialData(data.items);
  };

  useEffect(() => {
    popularData();
  }, []);

  useEffect(() => {
    if (initialData.length === 25) {
      setChannelAvatar([]);

      initialData.map((item, i) => {
        axios
          .get(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${key}`
          )
          .then(({ data }) => {
            setChannelAvatar((prev) => [...prev, data]);
          });
      });
    }
  }, [initialData.length === 25]);

  const getProfile = (video) => {
    let nameAv = channelAvatar.find(({ items }) => {
      if (items[0].id === video.snippet.channelId) {
        return items[0].snippet.thumbnails.high.url;
      }
    });

    return nameAv;
  };

  return (
    <div className="content">
      <hr
        style={{
          width: "100%",
          margin: "auto",
        }}
      />
      <div className="top__bar">
        {arr.map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
      </div>
      <hr
        style={{
          width: "100%",
          margin: "auto",
        }}
      />

      <div className="main__content">
        {initialData &&
          initialData.map((video, i) => {
            return (
              <Cards
                key={i}
                id={video.id}
                thumbnail={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                views={video.statistics.viewCount}
                uploadTimes={video.snippet.publishedAt}
                channelName={video.snippet.channelTitle}
                channelAvatar={getProfile(video)}
              />
            );
          })}
      </div>
    </div>
  );
};
