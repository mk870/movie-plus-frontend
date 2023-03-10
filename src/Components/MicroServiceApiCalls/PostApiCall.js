import axios from "axios";
import jwt_decode from "jwt-decode";
import { ginGolangApi } from "../Utils/BackEndApis";

export const postApiCall = (
  url,
  data,
  setSearchError,
  setSearchResults,
  setLoader,
  source
) => {
  axios
    .post(url, data, { cancelToken: source.token })
    .then((data) => {
      setSearchResults(data.data);
      setSearchError("");
      setLoader(false);
    })
    .catch((e) => {
      if (e.message !== "canceled") {
        setSearchError(e.message);
        setLoader(false);
      }
    });
};

export const postJwtApiCall = (
  url,
  data,
  setSearchError,
  setSearchResults,
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
    .post(url, data)
    .then((data) => {
      setSearchResults(data.data);
      setSearchError("");
      setLoader(false);
    })
    .catch((e) => {
      if (e.response?.data?.error !== "") {
        setSearchError(e.response?.data?.error);
      }
      if (JSON.stringify(e).message === "Network Error") {
        setSearchError("your internet connection is poor");
      }
      setLoader(false);
    });
};
