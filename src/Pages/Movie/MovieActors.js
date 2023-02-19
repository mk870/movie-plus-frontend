import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImProfile } from "react-icons/im";

import { MovieActorsStyles } from "./Styles/MovieActorsStyles";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import Spinner from "../../Components/Spinner/Spinner";
import { Button } from "../../Components/Button/Button";
import { key } from "../../Components/Utils/TMDBkey";
import { getActorsApiCall } from "../../Components/MicroServiceApiCalls/GetApiCall";
import { MovieContext } from "../../Components/Context/AppContext";


const MovieActors = () => {
  const { actorsData } = useContext(MovieContext);
  const { setActorId } = useContext(MovieContext);
  const { setActorsData } = useContext(MovieContext);
  const [movieError, setMovieError] = useState("");
  const { movieData } = useContext(MovieContext);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!movieData) {
      setActorsData("");
      getActorsApiCall(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`,
        setActorsData,
        setMovieError,
        setLoader
      );
    } else if (movieData && movieData.id !== id) {
      setActorsData("");
      getActorsApiCall(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`,
        setActorsData,
        setMovieError,
        setLoader
      );
    }
  }, []);

  const nameProcessor = (name) => {
    if (name.includes("/")) {
      return name.split("/")[1];
    }
    return name;
  };
  
  return (
    <MovieActorsStyles>
      <div className="actors-wrapper">
        {actorsData &&
          !loader &&
          actorsData.map((actor, index) => (
            <div className="actor" key={index}>
              <div className="profile">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt="profile-pic"
                />
              </div>
              <div className="details">
                <div className="info">
                  <div className="descr">
                    <div className="name">Real Name</div>
                    <span>{actor.name}</span>
                  </div>
                  <div className="descr">
                    <div className="name">Character Name</div>
                    <span>{nameProcessor(actor.character)}</span>
                  </div>
                </div>
                <div className="btns">
                  <Button
                    onClick={() => {
                      setActorId(actor.id);
                      navigate(`/actor/${actor.name}`);
                    }}
                  >
                    <ImProfile color="white" size={19} />
                    <span>View Profile</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {!actorsData && loader && !movieError && <Spinner />}
      {movieError && !actorsData && !loader && (
        <ApiErrorPage error={"Network Error: failed to fetch the cast"} />
      )}
    </MovieActorsStyles>
  );
};

export default MovieActors;
