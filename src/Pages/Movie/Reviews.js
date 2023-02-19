import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SiTwitter } from "react-icons/si";
import HTMLReactParser from "html-react-parser";

import { ReviewsStyles } from "./Styles/ReviewsStyles";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import Spinner from "../../Components/Spinner/Spinner";
import { Button } from "../../Components/Button/Button";
import { key } from "../../Components/Utils/TMDBkey";
import { getReviewsApiCall } from "../../Components/MicroServiceApiCalls/GetApiCall";
import { MovieContext } from "../../Components/Context/AppContext";
import pic from '../../Components/Assets/reviewers.jpg'

const Reviews = () => {
  const { reviewsData } = useContext(MovieContext);
  const { setReviewsData } = useContext(MovieContext);
  const [movieError, setMovieError] = useState("");
  const { movieData } = useContext(MovieContext);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const htmlReader = (data) => {
    if (!data) {
      return "Null";
    } else {
      let newData = String(HTMLReactParser(data));
      let cleanData = newData.replace(/[^A-Za-z0-9 .,!"':/]*/g, "");
      return cleanData.replace(/(https?|ftp):\/\/[\.[a-zA-Z0-9\/\-]+/, " ");
    }
  };

  useEffect(() => {
    if (!movieData) {
      setReviewsData("");
      getReviewsApiCall(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US`,
        setReviewsData,
        setMovieError,
        setLoader
      );
    } else if (movieData && movieData.id !== id) {
      setReviewsData("");
      getReviewsApiCall(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US`,
        setReviewsData,
        setMovieError,
        setLoader
      );
    }
  }, []);

  return (
    <ReviewsStyles>
      <div className="btn">
        <Button
          onClick={() => navigate(`/twittersentiment/${movieData.title}`)}
        >
          <SiTwitter color="white" size={19} /> <span>twitter sentiments</span>
        </Button>
      </div>
      {reviewsData && (
        <div className="reviews-wrapper">
          {reviewsData.map((review, index) => (
            <div className="review" key={index}>
              <div className="pic">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    review.author_details.avatar_path
                      ? review.author_details.avatar_path
                      : pic
                  }`}
                  alt="author-avatar"
                />
              </div>
              <div className="name">{review.author_details.name}</div>
              <div className="content">{htmlReader(review.content)}</div>
            </div>
          ))}
        </div>
      )}
      {!reviewsData && loader && !movieError && <Spinner />}
      {movieError && !reviewsData && !loader && (
        <ApiErrorPage error={"Network Error: failed to fetch the reviews"} />
      )}
    </ReviewsStyles>
  );
};

export default Reviews;
