import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import millify from "millify";
import { MdMovie } from "react-icons/md";

import { Button } from "../Button/Button";
import { MovieContext } from "../Context/AppContext";
import { postApiCall } from "../MicroServiceApiCalls/PostApiCall";
import Spinner from "../Spinner/Spinner";
import { key } from "../Utils/TMDBkey";
import { RecommendationStyles } from "./RecommendationsStyles";


const Recommendations = () => {
  const { recommendedMovies } = useContext(MovieContext);
  const { setRecommendedMovies } = useContext(MovieContext);
  const { setRecommendationSearchError } = useContext(MovieContext);
  const { setRecommendLoader } = useContext(MovieContext);
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState("");
  const [movieDataError, setMovieDataError] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setMovieDataError("");
    if (recommendedMovies) {
      const moviePromises = recommendedMovies.movie_id.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        ).then((response) => {
          if (!response.ok) {
            throw Error(
              "Could not fetch data please check your network connection"
            );
          } else {
            return response.json();
          }
        })
      );
      Promise.all(moviePromises)
        .then((data) => {
          setMovieData(data);
          setLoader(false);
        })

        .catch((e) => {
          setMovieDataError(e.message);
          setLoader(false);
        });
    }
  }, [recommendedMovies]);
  const recommendClickedMovie = (id) => {
    let data = {
      movie_clicked: id,
    };
    setRecommendedMovies("");
    setRecommendationSearchError("");
    setRecommendLoader(true);
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    postApiCall(
      "http://127.0.0.1:5000/recommend2",
      data,
      setRecommendationSearchError,
      setRecommendedMovies,
      setRecommendLoader,
      source
    );
  };
  return (
    <RecommendationStyles>
      {movieData && !movieDataError && !loader && (
        <>
          <div className="searched-movie">
            <div className="searched_image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieData[0].poster_path}`}
                alt="poster"
              />
            </div>
            <div className="searched_info">
              <p className="title">{movieData[0].title}</p>
              <div className="info">
                <p>Overview</p>
                <span>{`${movieData[0].overview}`}</span>
              </div>
              <div className="infocard">
                <div className="info">
                  <p>Runtime</p>
                  <span>{`${movieData[0].runtime} mins`}</span>
                </div>
                <div className="info">
                  <p>Popularity</p>
                  <span>{`${movieData[0].popularity}`}</span>
                </div>
                <div className="info">
                  <p>Release Date</p>
                  <span>{`${movieData[0].release_date}`}</span>
                </div>
                <div className="info">
                  <p>Budget</p>
                  <span>{`$${millify(movieData[0].budget)}`}</span>
                </div>
                <div className="info id">
                  <p>Id</p>
                  <span>{`${movieData[0].id}`}</span>
                </div>
              </div>
              <Button onClick={() => navigate(`/movie/${movieData[0].id}`)}>
                <MdMovie size={19} />
                <span>More Movie Details</span>
              </Button>
            </div>
          </div>
          <div className="heading">
            <h3>RECOMMENDED MOVIES FOR YOU </h3>
            <h4>(click any movie below to get more recommendations)</h4>
          </div>
          <div className="recom-movies">
            {movieData.slice(1, 9).map((movie, index) => (
              <div
                className="card"
                key={index}
                onClick={() => recommendClickedMovie(movie.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>
        </>
      )}
      {loader && !movieDataError && !movieData && <Spinner />}
      {movieDataError && !movieData && !loader && (
        <div className="error">
          <h2>Failed to fetch data please check your network settings</h2>
        </div>
      )}
    </RecommendationStyles>
  );
};

export default Recommendations;
