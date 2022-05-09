import React, { createContext, useEffect, useState } from "react";
import wallet1 from "../assets/image/wallet1.png";
import wallet2 from "../assets/image/wallet2.png";
import avatar from "../assets/image/avatar.png";
export const userContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    let defaultData = {
      name: "Ali",
      fname: "Houshangi",
      email: "alihoushngi@gmail.com",
      avatar: avatar,
      password: "12345678aA",
      status: "offline",
      totalbalance: 12345752.1,
      revenue: 14000,
      wallets: [
        {
          name: "Bitcoin",
          balance: 1712.1,
          usd: 9241123.54,
          image: wallet1,
        },
        {
          name: "Ethereum",
          balance: 1014.1,
          usd: 54272.54,
          image: wallet2,
        },
      ],
    };
    const ls = localStorage.getItem("user");

    if (ls) {
      defaultData = JSON.parse(ls);
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
