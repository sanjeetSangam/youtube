import React, { useEffect, useState } from "react";
import { Play } from "../components/Play";
import { RelatedVideo } from "../components/RelatedVideo";
import { useParams } from "react-router-dom";

import "../styles/videoPlay.css";
import axios from "axios";

export const VideoPlay = () => {
  const [videoData, setVideoData] = useState({});
  const [channelData, setChannelData] = useState({});
  const [uploadTime, setUploadTime] = useState(undefined);
  const { id } = useParams();
  var key = "AIzaSyCIWZm0KYz1ipQIJEEDTbDyX2-kbzPTvbg";

  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${key}`
        )
        .then(({ data }) => {
          setVideoData(data);
        });
    }
  }, [id]);

  useEffect(() => {
    if (videoData.items) {
      let newDate = new Date(videoData.items[0].snippet.publishedAt);
      setUploadTime(newDate.toDateString());

      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.items[0].snippet.channelId}&key=AIzaSyD94-l0dwOKXzjVuN_OwMkcOrveZz3OXWo`
        )
        .then(({ data }) => {
          setChannelData(data);
        });
    }
  }, [videoData]);

  return (
    <div className="video__page">
      <Play videoData={videoData} channelData={channelData} uploadTime={uploadTime} />
      <RelatedVideo />
    </div>
  );
};
