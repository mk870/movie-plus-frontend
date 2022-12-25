import axios from "axios";

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
  jwt
) => {
  axios
    .post(url, data, { headers: { Authorization: `Bearer ${jwt}` } })
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
