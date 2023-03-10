import React, { useContext, useEffect, useState } from "react";
import { NavbarStyles } from "./NavbarStyles";
import logo from "../Assets/logo5.jpg";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiMovie2Fill, RiLogoutCircleFill } from "react-icons/ri";
import { MdRecentActors } from "react-icons/md";
import { AiOutlineLogin, AiOutlineClose } from "react-icons/ai";
import { SiGnuprivacyguard } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import Dropdown from "./Dropdown";
import { MovieContext } from "../Context/AppContext";
import { ginGolangApi } from "../Utils/BackEndApis";
import Popup from "../Popup/Popup";
import { logoutApiCall } from "../MicroServiceApiCalls/LogoutApiCall";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const [logoutResponse, setLogoutResponse] = useState("");
  const [logoutError, setLogoutError] = useState("");
  const [popup, setPopup] = useState(false);
  const [loader, setLoader] = useState(false);
  const { value } = useContext(MovieContext);
  const { setValue } = useContext(MovieContext);
  const [dropMenu, setDropMenu] = useState(false);
  
  const url = `${ginGolangApi}/logout`;
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 760) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, [screenSize]);
  
  const handleLogout = () => {
    setLoader(true);
    logoutApiCall(
      url,
      setLogoutResponse,
      setLogoutError,
      setLoader,
      value,
      setValue
    );
    setPopup(true);
    
  };
  return (
    <NavbarStyles>
      {popup && logoutError && (
        <div className="popup">
          <Popup confirmation={logoutError} close={setPopup} />
        </div>
      )}
      {popup && logoutResponse && (
        <div className="popup">
          <Popup confirmation={logoutResponse} close={setPopup} />
        </div>
      )}
      <div className="head">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="name">
          <span className="one">Movie</span>
          <span className="two">Plus</span>
        </div>
      </div>
      {!mobileMenu ? (
        <div className="pages">
          <div className="page" onClick={() => navigate("/")}>
            <FaHome size={20} color={"red"} />
            <span>Home</span>
          </div>
          <div className="page" onClick={() => navigate("/mymovies")}>
            <RiMovie2Fill size={20} color={"#07f7db"} />
            <span>MyMovies</span>
          </div>
          <div className="page" onClick={() => navigate("/myactors")}>
            <MdRecentActors size={20} color={"#f7dd9c"} />
            <span>MyActors</span>
          </div>
          <div
            className="page"
            onClick={value ? handleLogout : () => navigate("/login")}
          >
            {loader ? null : value ? (
              <RiLogoutCircleFill fontSize={19} color={"red"} />
            ) : (
              <AiOutlineLogin size={20} color={"#1157fa"} />
            )}
            <span>{loader ? "Loading" : value ? "Logout" : "Login"}</span>
          </div>
          <div className="page" onClick={() => navigate("/signup")}>
            <SiGnuprivacyguard size={20} color={"#11f537"} />
            <span>Signup</span>
          </div>
        </div>
      ) : (
        <div className="mobile">
          <div className="menu">
            {dropMenu ? (
              <AiOutlineClose
                size={31}
                color={"white"}
                onClick={() => setDropMenu(!dropMenu)}
              />
            ) : (
              <HiMenu
                size={34}
                color={"white"}
                onClick={() => setDropMenu(!dropMenu)}
              />
            )}
          </div>
          <div className="dropdown">
            {dropMenu && <Dropdown logoutFunc={handleLogout} loader={loader} />}
          </div>
        </div>
      )}
    </NavbarStyles>
  );
};

export default Navbar;
