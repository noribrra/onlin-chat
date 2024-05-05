import { createContext, useContext, useEffect, useState } from "react";
import { Usercontext } from "./Authcontext";
import io from "socket.io-client";

const Socketcontext = createContext();

export const Usesocket = () => {
  return useContext(Socketcontext);
};

export const Socketprovider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const [onlinusers, setonlinusers] = useState({});
  const { authuser } = Usercontext();

  useEffect(() => {
    if (authuser) {
      // Close previous socket connection if it exists
      if (socket) {
        socket.close();
      }
      // Create new socket connection
      const newSocket = io("http://localhost:5000", {
        query: {
          userId: authuser._id,
        },
      });
      setsocket(newSocket);
      newSocket.on("onlineusers", (users) => {
        setonlinusers(users);
      });

      return () => {
        // Cleanup function to close socket connection
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setsocket(null);
      }
    }
  }, [authuser]);

  return (
    <Socketcontext.Provider value={{ socket, onlinusers }}>
      {children}
    </Socketcontext.Provider>
  );
};
