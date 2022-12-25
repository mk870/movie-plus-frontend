import axios from "axios";

export const DeleteApiCall = (url, value, setApiData, setError, setLoader) => {
  axios
    .delete(url, { headers: { Authorization: `Bearer ${value}` } })
    .then((data) => {
      setApiData(data.data);
      setError("");
      setLoader(false);
    })
    .catch((e) => {
      setError(e.message);
      setLoader(false);
    });
};
