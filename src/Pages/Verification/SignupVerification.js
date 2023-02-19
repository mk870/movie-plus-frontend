import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../../Components/Context/AppContext";
import { getVerificationApiCall } from "../../Components/MicroServiceApiCalls/GetApiCall";
import Spinner from "../../Components/Spinner/Spinner";
import { ginGolangApi } from "../../Components/Utils/BackEndApis";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import { SignupVerificationStyles } from "./SignupVerificationStyles";

const SignupVerification = () => {
  const [apiData, setApiData] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const { setValue } = useContext(MovieContext);
  const { token } = useParams();
  const url = `${ginGolangApi}/verification/${token}`;

  useEffect(() => {
    getVerificationApiCall(url, setApiData, setError, setLoader, setValue);
  }, []);

  return (
    <SignupVerificationStyles>
      {loader && !error && !apiData && <Spinner />}
      {!loader && error && !apiData && (
        <ApiErrorPage
          error={error}
        />
      )}
      {!loader && !error && apiData && <h2>{apiData}</h2>}
    </SignupVerificationStyles>
  );
};

export default SignupVerification;
