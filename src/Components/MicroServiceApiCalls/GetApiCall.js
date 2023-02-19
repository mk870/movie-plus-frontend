import axios from "axios";
import jwt_decode from "jwt-decode";
import { ginGolangApi } from "../Utils/BackEndApis";

export const getApiCall = (
  url,
  setSearchResults,
  setSearchError,
  setLoader
) => {
  axios
    .get(url)
    .then((data) => {
      setSearchResults(data.data);
      setSearchError("");
      setLoader(false);
    })
    .catch((e) => {
      setSearchError(e.message);
      setLoader(false);
    });
};

export const getMovieApiCall = (url, setSearchResults, setSearchError) => {
  axios
    .get(url)
    .then((data) => {
      setSearchResults(data.data);
      setSearchError("");
    })
    .catch((e) => {
      setSearchError(e.message);
    });
};

export const getActorsApiCall = (
  url,
  setSearchResults,
  setSearchError,
  setLoader
) => {
  axios
    .get(url)
    .then((data) => {
      setSearchResults(data.data.cast.slice(0, 12));
      setLoader(false);
    })
    .catch((e) => {
      setSearchError(e.message);
      setLoader(false);
    });
};

export const getReviewsApiCall = (
  url,
  setReviewsData,
  setSearchError,
  setLoader
) => {
  axios
    .get(url)
    .then((data) => {
      setReviewsData(data.data.results.slice(0, 8));
      setSearchError("");
      setLoader(false);
    })
    .catch((e) => {
      setSearchError(e.message);
      setLoader(false);
    });
};

export const getVerificationApiCall = (
  url,
  setData,
  setError,
  setLoader,
  setValue
) => {
  axios
    .get(url)
    .then((data) => {
      setData("verification successful");
      setValue(data.data.accessToken);
      setError(null);
      setLoader(false);
    })
    .catch((e) => {
      if (e.response?.data.error !== "") {
        setError(e.response?.data.error);
      }
      if (JSON.stringify(e).message === "Network Error") {
        setError("your internet connection is poor");
      }
      setLoader(false);
    });
};

export const getApiCallAuth = (
  url,
  setSearchResults,
  setSearchError,
  setLoader,
  jwt,
  setJwt
) => {
  const axiosApiInstance = axios.create();
  axiosApiInstance.interceptors.request.use(
    async (config) => {
      const user = jwt_decode(jwt);
      const exp = user.exp * 1000;
      const expiryTime = new Date(exp).getTime();
      const currentTime = new Date().getTime();
      if (currentTime >= expiryTime) {
        const value = await axios.get(`${ginGolangApi}/refresh-token`, {
          headers: {
            token: jwt,
          },
        });
        setJwt(value.data.accessToken);
        config.headers = {
          Authorization: `Bearer ${value.data.accessToken}`,
        };
        return config;
      } else {
        config.headers = {
          Authorization: `Bearer ${jwt}`,
        };
        return config;
      }
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axiosApiInstance
    .get(url)
    .then((data) => {
      setSearchResults(data.data);
      setSearchError("");
      setLoader(false);
    })
    .catch((e) => {
      if (e.response?.data.error !== "") {
        setSearchError(e.response?.data.error);
      }
      if (JSON.stringify(e).message === "Network Error") {
        setSearchError("your internet connection is poor");
      }
      setLoader(false);
    });
};
