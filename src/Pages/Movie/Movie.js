import React, { useContext } from "react";

import MovieActors from "./MovieActors";
import { MovieStyles } from "./Styles/MovieStyles";
import MovieInfo from "./MovieInfo";
import Reviews from "./Reviews";
import Spinner from "../../Components/Spinner/Spinner";
import { MovieContext } from "../../Components/Context/AppContext";


const Movie = () => {
  const { reviewsData } = useContext(MovieContext);
  const { actorsData } = useContext(MovieContext);
  const { movieData } = useContext(MovieContext);
  const { movieError } = useContext(MovieContext);

  return (
    <MovieStyles>
      {
        <div className="wrapper">
          <div className="m-infor">
            <span className="m-info-heading">
              {movieData.title} Information
            </span>
            <MovieInfo />
          </div>
          <div className="m-actors">
            <span className="m-info">Cast</span>
            <MovieActors />
          </div>
          <div className="m-reviews">
            <span className="m-info">Reviews</span>
            <Reviews />
          </div>
        </div>
      }
      {!movieData && !actorsData && !reviewsData && !movieError && <Spinner />}
    </MovieStyles>
  );
};

export default Movie;
