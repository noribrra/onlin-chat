import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const Usercontext = () => {
  return useContext(Authcontext);
};

// eslint-disable-next-line react/prop-types
export const Authcontextprovider = ({ children }) => {
  const [authuser, setauthuser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  //   console.log(authuser);
  return (
    <Authcontext.Provider value={{ authuser, setauthuser }}>
      {children}
    </Authcontext.Provider>
  );
};
