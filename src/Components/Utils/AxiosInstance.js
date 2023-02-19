import jwt_decode from "jwt-decode";
import axios from "axios";
import { ginGolangApi } from "./BackEndApis";

export const axiosInstance = (jwt, setJwt) => {
  const instance = axios.create({
    baseURL: ginGolangApi,
    headers: { Authorization: `Bearer ${jwt}` },
  });
  instance.interceptors.request.use(async (req) => {
    console.log("intercepter ran");
    const user = jwt_decode(jwt);
    const exp = user.exp * 1000;
    const expiryTime = new Date(exp).getMinutes();
    const currentTime = new Date().getMinutes();
    if (currentTime >= expiryTime) {
      console.log("expired");
      axios
        .get(`${ginGolangApi}/refresh-token`, {
          headers: {
            'token': jwt,
          },
        })
        .then((data) => {
          console.log(data.data.accessToken);
          setJwt(data.data.accessToken);
          req.headers.Authorization = `Bearer ${data.data.accessToken}`;
          return req;
        });
    } else {
      console.log("not expired");
      return req;
    }
  });
  return instance;
};
