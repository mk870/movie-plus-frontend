import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { SiGnuprivacyguard } from "react-icons/si";

import ApiError from "../ApiErrorPage/ApiErrorPage";
import { SignupForm } from "../FormContent/FormContent";
import { Button } from "../Button/Button";
import Popup from "../Popup/Popup";
import Spinner from "../Spinner/Spinner";
import { postApiCall } from "../MicroServiceApiCalls/PostApiCall";
import { springBootApi } from "../Utils/BackEndApis";
import { SignupStyles } from "./SignupStyles";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(4),
  })
  .required();

const Signup = () => {
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [apiData, setApiData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3500);
    }
  }, [error]);

  const submit = (userData) => {
    setLoader(true);
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    postApiCall(
      `${springBootApi}/api/signup`,
      userData,
      setError,
      setApiData,
      setLoader,
      source
    );
    setPopup(true);
  };
  return (
    <SignupStyles>
      {!loader && !error && (
        <div className="card">
          {popup && apiData && (
            <Popup confirmation={apiData} close={setPopup} />
          )}
          <h2>Please Fill In Your Details</h2>
          <form className="form" onSubmit={handleSubmit(submit)}>
            {SignupForm.inputs.map((input, key) => (
              <div className="wrapper" key={key}>
                <label htmlFor={input.name}>{input.label}</label>
                <input
                  placeholder={`please enter your ${input.name}`}
                  type={input.type}
                  {...register(input.name, { required: true })}
                />
                <p>{errors[input.name]?.message}</p>
              </div>
            ))}
            <div className="submit">
              <Button type="submit">
                <SiGnuprivacyguard size={19} color={"white"} />
                <span>Signup</span>
              </Button>
            </div>
          </form>
        </div>
      )}
      {error && !loader && (
        <div className="item">
          <ApiError error={"Network Error: Sorry could not sign you up"} />
        </div>
      )}
      {loader && (
        <div className="item">
          <Spinner />
        </div>
      )}
    </SignupStyles>
  );
};

export default Signup;
