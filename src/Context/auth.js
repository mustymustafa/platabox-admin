import React, { createContext, useState, useContext, useEffect } from "react";

const authctx = createContext(undefined);
export const useAuth = () => useContext(authctx);

export const AuthProvider = (props) => {
  const [isAuth, setisAuth] = useState(store);

  //fake auth
  useEffect(() => {
    localStorage.setItem("247Auth", JSON.stringify(isAuth));
  }, [isAuth]);

  function store() {
    const savedisAuth = JSON.parse(localStorage.getItem("247Auth"));
    return savedisAuth || "";
  }
  return (
    <authctx.Provider
      value={{
        isAuth,
        setisAuth,
      }}
    >
      {" "}
      {props.children}{" "}
    </authctx.Provider>
  );
};
