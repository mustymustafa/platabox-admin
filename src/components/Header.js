import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/core";
import { useAuth } from "../Context/auth";

export default function Header() {
  const [openHam, setOpenHam] = useState(false);
  const { isAuth, setisAuth } = useAuth();

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to LogOut?")) {
      setisAuth("");
      setOpenHam((prev) => !prev);
      return true;
    }
  };

  return (
    <div>
      <header>
        <div className="nav-wrap">
          <div className="logo">
            <Link to="/">247Admin</Link>
          </div>
          <div
            className="ham"
            role="button"
            onClick={() => {
              setOpenHam((prev) => !prev);
            }}
          >
            <img src="icons8-menu.svg" alt="menu" role="button" />
          </div>

          <nav className={openHam ? "open-nav" : ""}>
            <ul>
              <Link to="/driver-registration">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Drivers Registration
                </li>
              </Link>
              <Link to="/logistics-registration">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Logistics Registration
                </li>
              </Link>
              <Link to="/users">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Users
                </li>
              </Link>
              <Link to="/drivers">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Drivers
                </li>
              </Link>
              <Link to="/logistics">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Logistics
                </li>
              </Link>
              <Link to="/delivery-request">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Delivery Requests
                </li>
              </Link>
              <Link to="/ride-request">
                <li
                  onClick={() => {
                    setOpenHam((prev) => !prev);
                  }}
                >
                  Ride Requests
                </li>
              </Link>
              <li
                onClick={() => {
                  if (isAuth) {
                    handleLogout();
                  } else {
                    setOpenHam((prev) => !prev);
                  }
                }}
              >
                <Link to="/">
                  <Button variantColor="green" width="20" height="8">
                    {isAuth ? "SignOut" : "LogIn"}
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
