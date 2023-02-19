import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Globalstyles } from "./Components/GlobalStyles/GlobalStyles";
import { useEffect, useState } from "react";
import { MovieContext } from "./Components/Context/AppContext";
import { useLocaleStorage } from "./Components/Utils/useLocaleStorage";
import Home from "./Pages/Home/Home";
import MyActors from "./Pages/MyActors/MyActors";
import MyMovies from "./Pages/MyMovies/MyMovies";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import SignupVerification from "./Pages/Verification/SignupVerification";
import TwitterSentiment from "./Pages/TwitterSentiment/TwitterSentiment";
import WatchVideo from "./Pages/Videos/WatchVideo";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Movie from "./Pages/Movie/Movie";
import Actor from "./Pages/Actor/Actor";

function App() {
  const [recentMovies, setRecentMovies] = useState("");
  const [movieData, setMovieData] = useState("");
  const [reviewsData, setReviewsData] = useState("");
  const [actorsData, setActorsData] = useState("");
  const [movieError, setMovieError] = useState("");
  const [actorId, setActorId] = useState("");
  const [recommendedMovies, setRecommendedMovies] = useState("");
  const [recommendationSearchError, setRecommendationSearchError] =
    useState("");
  const [recommendLoader, setRecommendLoader] = useState(false);
  const [value, setValue] = useLocaleStorage(null, "moviejwt");
  useEffect(()=>{
    console.log("refreshed")
  },[value])
  return (
    <MovieContext.Provider
      value={{
        recentMovies,
        setRecentMovies,
        recommendedMovies,
        setRecommendedMovies,
        recommendationSearchError,
        setRecommendationSearchError,
        recommendLoader,
        setRecommendLoader,
        movieData,
        setMovieData,
        actorsData,
        setActorsData,
        setMovieError,
        movieError,
        reviewsData,
        setReviewsData,
        actorId,
        setActorId,
        setValue,
        value,
      }}
    >
      <BrowserRouter>
        <Globalstyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/myactors"
            element={value ? <MyActors /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/mymovies"
            element={value ? <MyMovies /> : <Navigate to={"/login"} />}
          />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/actor/:name" element={<Actor />} />
          <Route path="/verification/:token" element={<SignupVerification />} />
          <Route
            path="/twittersentiment/:movie"
            element={<TwitterSentiment />}
          />
          <Route path="/video/:name" element={<WatchVideo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;
