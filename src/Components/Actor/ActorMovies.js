import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/AppContext";
import { ActorMoviesStyles } from "./Styles/ActorMovieStyles";
import { key } from "../Utils/TMDBkey";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ActorMovies = () => {
  const { actorId } = useContext(MovieContext);
  const [actorMovieList, setActorMoviesList] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  const { name } = useParams();
  const navigate = useNavigate();
  const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US&append_to_response=combined_credits`;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setActorMoviesList(data.data.combined_credits.cast.slice(0, 16));
        setError("");
        setLoader(false);
      })
      .catch((e) => {
        setError(e.massege);
        setLoader(false);
      });
  }, []);

  return (
    <ActorMoviesStyles>
      {actorMovieList && !error && !loader && (
        <div className="list">
          <h3>Featured Movie-List</h3>
          <div className="card-list">
            {actorMovieList.map((movie, index) => (
              <div
                className="item"
                key={index}
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {error !== "" && !loader && (
        <ApiErrorPage
          error={`Network Error: failed to fetch ${name}'s movies`}
        />
      )}
      {loader && error === "" && !actorMovieList && <Spinner />}
    </ActorMoviesStyles>
  );
};

export default ActorMovies;
