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
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/driver-registration">Drivers Registration</Link>
              </li>
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/logistics-registration">Logistics Registration</Link>
              </li>
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/users">Users</Link>
              </li>
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/drivers">Drivers</Link>
              </li>
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/logistics">Logistics</Link>
              </li>
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/delivery-request">Delivery Requests</Link>
              </li>
              <li
                onClick={() => {
                  setOpenHam((prev) => !prev);
                }}
              >
                <Link to="/ride-request">Ride Requests</Link>
              </li>
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
