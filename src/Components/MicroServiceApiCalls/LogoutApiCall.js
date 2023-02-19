import axios from "axios";
import jwt_decode from "jwt-decode";
import { ginGolangApi } from "../Utils/BackEndApis";

export const logoutApiCall = (
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
      setJwt(null);
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
