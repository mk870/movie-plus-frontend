import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Globalstyles } from "./Components/GlobalStyles/GlobalStyles";
import MyActors from "./Components/MyActors/MyActors";
import MyMovies from "./Components/MyMovies/MyMovies";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { useState } from "react";
import { MovieContext } from "./Components/Context/AppContext";
import Movie from "./Components/Movie/Movie";
import TwitterSentiment from "./Components/TwitterSentiment/TwitterSentiment";
import Actor from "./Components/Actor/Actor";
import WatchVideo from "./Components/Videos/WatchVideo";
import SignupVerification from "./Components/Verification/SignupVerification";
import { useLocaleStorage } from "./Components/Utils/useLocaleStorage";

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
