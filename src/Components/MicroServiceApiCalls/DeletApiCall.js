import axios from "axios";
import jwt_decode from "jwt-decode";
import { ginGolangApi } from "../Utils/BackEndApis";

export const DeleteApiCall = (
  url,
  jwt,
  setApiData,
  setError,
  setLoader,
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
    .delete(url)
    .then((data) => {
      setApiData(data.data);
      setError("");
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
