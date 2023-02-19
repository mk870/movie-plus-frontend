import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleFill } from "react-icons/ri";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { LoginStyles } from "./LoginStyles";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import Spinner from "../../Components/Spinner/Spinner";
import { Button } from "../../Components/Button/Button";
import { LoginForm } from "../../Components/FormContent/FormContent";
import Popup from "../../Components/Popup/Popup";
import { logoutApiCall } from "../../Components/MicroServiceApiCalls/LogoutApiCall";
import { postApiCall } from "../../Components/MicroServiceApiCalls/PostApiCall";
import { ginGolangApi } from "../../Components/Utils/BackEndApis";
import { MovieContext } from "../../Components/Context/AppContext";

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(4),
  })
  .required();

const Login = () => {
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState("");
  const [popup, setPopup] = useState(false);
  const [onload, setOnload] = useState(false);
  const { value } = useContext(MovieContext);
  const { setValue } = useContext(MovieContext);
  const navigate = useNavigate();
  const logInUrl = `${ginGolangApi}/login`;
  const logOutUrl = `${ginGolangApi}/logout`;
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
      }, 2500);
    }
  }, [error]);

  useEffect(() => {
    if (apiData) {
      setValue(apiData.accessToken);
    }
  }, [apiData]);

  const submit = (userData) => {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    let data ={
      "Email": userData.email,
      "Password": userData.password
    }
    setOnload(true);
    postApiCall(logInUrl, data, setError, setApiData, setOnload, source);
    if (!error) setPopup(true);
    reset()
  };
  const handleLogout = () => {
    setOnload(true);
    logoutApiCall(
      logOutUrl,
      setApiData,
      setError,
      setOnload,
      value,
      setValue
    );
  }
  return (
    <LoginStyles>
      {!onload && !error && (
        <div className="card">
          {popup && apiData && (
            <Popup confirmation={apiData.response} close={setPopup} />
          )}
          <h2>Please Fill In Your Details</h2>
          <form className="form" onSubmit={handleSubmit(submit)}>
            {LoginForm.inputs.map((input, key) => (
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
              {!value ? (
                <Button type="submit">
                  <AiOutlineLogin size={19} color={"white"} />
                  <span>Login</span>
                </Button>
              ) : (
                <Button onClick={handleLogout}>
                  <RiLogoutCircleFill fontSize={19} color={"white"} />
                  <span>Logout</span>
                </Button>
              )}
              {!value ? (
                <span className="link" onClick={() => navigate("/signup")}>
                  Create an Account
                </span>
              ) : null}
            </div>
          </form>
        </div>
      )}
      {!error && onload && (
        <div className="item">
          <Spinner />
        </div>
      )}
      {error !== "" && !onload && (
        <div className="item">
          <ApiErrorPage error={error} />
        </div>
      )}
    </LoginStyles>
  );
};

export default Login;
