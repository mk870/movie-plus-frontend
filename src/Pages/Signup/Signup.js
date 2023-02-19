import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { SiGnuprivacyguard } from "react-icons/si";


import { SignupStyles } from "./SignupStyles";
import { postApiCall } from "../../Components/MicroServiceApiCalls/PostApiCall";
import { ginGolangApi } from "../../Components/Utils/BackEndApis";
import Popup from "../../Components/Popup/Popup";
import { Button } from "../../Components/Button/Button";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import Spinner from "../../Components/Spinner/Spinner";
import { SignupForm } from "../../Components/FormContent/FormContent";

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
    reset,
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
    let data ={
      "FirstName":userData.firstName,
      "LastName":userData.lastName,
      "Email": userData.email,
      "Password": userData.password
    }
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    postApiCall(
      `${ginGolangApi}/user`,
      data,
      setError,
      setApiData,
      setLoader,
      source
    );
    setPopup(true);
    reset()
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
                  placeholder={`enter ${input.name}`}
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
          <ApiErrorPage error={error} />
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
