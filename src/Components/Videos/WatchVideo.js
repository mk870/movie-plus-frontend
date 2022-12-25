import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { youtubeKey } from "../Utils/YoutubeKey";
import { WatchVideoStyles } from "./WatchVideoStyles";
import Spinner from "../Spinner/Spinner";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";

const WatchVideo = () => {
  const [videos, setVideos] = useState("");
  const [watchVid, setWatchVid] = useState("");
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const { name } = useParams();
  const [videoList, setVideoList] = useState([]);

  const getType = (param) => {
    let type = param.split("--")[1];
    return type;
  };
  const getVideoName = (param) => {
    let vidName = param.split("--")[0];
    return vidName;
  };
  const cleanSnippet = (snippet) => {
    return snippet.replace(/(https?|ftp):\/\/[\.[a-zA-Z0-9\/\-]+/, " ");
  };
  useEffect(() => {
    if (name.split("--")[1] === "review") {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${getVideoName(
            name
          )} ${getType(name)}&key=${youtubeKey}`
        )
        .then((data) => {
          setVideos(data.data.items.slice(1, 5));
          setVideoList(data.data.items);
          setWatchVid(data.data.items[0]);
          console.log(data.data);
          setError("");
          setLoader(false);
        })
        .catch((e) => {
          setError(e.massege);
          setLoader(false);
          console.log(e.message);
        });
    } else if (name.split("--")[1] === "trailer") {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${getVideoName(
            name
          )} ${getType(name)}&key=${youtubeKey}`
        )
        .then((data) => {
          setWatchVid(data.data.items[0]);
          setError("");
          setLoader(false);
        })
        .catch((e) => {
          setError(e.massege);
          setLoader(false);
          console.log(e.message);
        });
    }
  }, []);
  return (
    <WatchVideoStyles>
      {watchVid && !error && !loader && (
        <div
          className={
            name.split("--")[1] === "review" ? "container" : "container-trailer"
          }
        >
          <div className="video">
            <div className="embed">
              <iframe
                className={
                  name.split("--")[1] === "review" ? "iframe" : "iframe-trailer"
                }
                title="videoplayer"
                src={`https://www.youtube.com/embed/${watchVid.id.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="segment">
              <h4 className="header">{cleanSnippet(watchVid.snippet.title)}</h4>
            </div>
          </div>
          <div className="videoList">
            {videoList &&
              videos &&
              videos.map((video, index) => (
                <div
                  className="item"
                  key={index}
                  onClick={() => {
                    setWatchVid(video);
                    setVideos(
                      videoList.filter(
                        (value) => value.id.videoId !== video.id.videoId
                      )
                    );
                  }}
                >
                  <img
                    className="image"
                    alt={video.snippet.title}
                    src={video.snippet.thumbnails.medium.url}
                  />
                  <div className="content">
                    <div className="header">
                      {cleanSnippet(video.snippet.title)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      {!watchVid && !error && loader && <Spinner />}
      {!watchVid && error !== "" && !loader && (
        <ApiErrorPage error={"Network Error: Sorry could not fetch video"} />
      )}
    </WatchVideoStyles>
  );
};

export default WatchVideo;
