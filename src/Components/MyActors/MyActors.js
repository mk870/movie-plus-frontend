import React, { useContext, useEffect, useState } from "react";
import ApiErrorPage from "../ApiErrorPage/ApiErrorPage";
import { Button } from "../Button/Button";
import { MovieContext } from "../Context/AppContext";
import { getApiCallAuth } from "../MicroServiceApiCalls/GetApiCall";
import { MyActorsStyles } from "./MyActorsStyles";
import Spinner from "../Spinner/Spinner";
import { DeleteApiCall } from "../MicroServiceApiCalls/DeletApiCall";
import { useNavigate } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import { springBootApi } from "../Utils/BackEndApis";

const MyActors = () => {
  const url = `${springBootApi}/api/account/actors`;
  const [actors, setActors] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  const [onDelete, setOnDelete] = useState("");
  const { value } = useContext(MovieContext);
  const { setActorId } = useContext(MovieContext);
  const navigate = useNavigate();

  useEffect(() => {
    setOnDelete("");
    getApiCallAuth(url, setActors, setError, setLoader, value);
  }, [onDelete]);
  
  const deleteItem = (id) => {
    setLoader(true);
    setActors("");
    setError("");
    DeleteApiCall(
      `${springBootApi}/api/account/actor/${id}`,
      value,
      setOnDelete,
      setError,
      setLoader
    );
  };
  const actorInfo = (id, name) => {
    setActorId(id);
    navigate(`/actor/${name}`);
  };
  return (
    <MyActorsStyles>
      <h2>My Actors </h2>
      {actors &&
        !error &&
        !loader &&
        actors.map((actor) => (
          <div className="actors-list" key={actor.tmdb_id}>
            <div className="actor">
              <span className="description">Name</span>
              <span>{actor.name}</span>
            </div>
            <div className="actor">
              <span className="description">Gender</span>
              <span>{actor.gender}</span>
            </div>
            <div className="actor">
              <span className="description">Birthday</span>
              <span>{actor.birthday}</span>
            </div>
            <div className="actor">
              <span className="description">Birth Place</span>
              <span>{actor.birth_place}</span>
            </div>
            <div className="actor">
              <span className="description">Age</span>
              <span>{actor.age}</span>
            </div>
            <div className="btn">
              <Button onClick={() => actorInfo(actor.tmdb_id, actor.name)}>
                <ImProfile color="white" size={19} />
                <span>View Profile</span>
              </Button>
              <Button onClick={() => deleteItem(actor.id)}>
                <AiFillDelete color="white" size={19} />
                <span>Delete</span>
              </Button>
            </div>
          </div>
        ))}
      {!actors && !error && loader && <Spinner />}
      {!actors && error && !loader && (
        <ApiErrorPage
          error={"Network Error: Sorry could not fetch your actors"}
        />
      )}
    </MyActorsStyles>
  );
};

export default MyActors;
