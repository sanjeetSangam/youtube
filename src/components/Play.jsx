import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

import { useParams } from "react-router-dom";

import { BiLike, BiDislike, BiCut, BiSave } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

export const Play = ({ videoData, channelData,uploadTime }) => {
  const { id } = useParams();

  const formatViews = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  return (
    <>
      {videoData.items && channelData.items && (
        <div className="play">
          <div className="video__show">
            <iframe
              id="if"
              width="100%"
              height="700px"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>

            <div className="video__details">
              <h3>{videoData.items[0].snippet.title}</h3>

              <div className="additionalData">
                <div className="views">
                  <p>
                    {formatViews(videoData.items[0].statistics.viewCount)} views
                    -
                  </p>
                  <p>{uploadTime}</p>
                </div>
                <div className="likeanddislike">
                  <button>
                    <BiLike />
                    LIKES
                  </button>
                  <button>
                    <BiDislike />
                    DISLIKES
                  </button>
                  <button>
                    <RiShareForwardLine />
                    SHARE
                  </button>
                  <button>
                    <BiCut />
                    CLIP
                  </button>
                  <button>
                    <BiSave />
                    SAVE
                  </button>
                </div>
              </div>
            </div>

            <hr style={{ marginTop: "1rem" }} />

            <div className="channel__Details">
              <div className="channel">
                <Avatar
                  sx={{ height: "60px", width: "60px" }}
                  src={channelData.items[0].snippet.thumbnails.high.url}
                />
                <div className="channelName">
                  <strong>{channelData.items[0].snippet.title}</strong>
                  <p>
                    {formatViews(
                      channelData.items[0].statistics.subscriberCount
                    )}{" "}
                    Subscribers
                  </p>
                </div>
              </div>

              <div className="subscribe">
                <button>Subscribe</button>
              </div>
            </div>

            <div className="descr">
              <div className="videoDetails">
                <p>{videoData.items[0].snippet.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
