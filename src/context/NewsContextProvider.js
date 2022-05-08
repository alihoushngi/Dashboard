import React, { useState, useEffect } from "react";
import axios from "axios";
import { NEWS_BASE_URL } from "../services/api";
// API
export const newsContext = React.createContext();
const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(`${NEWS_BASE_URL}/blogs`)
      .then((res) => setNews(res.data.blogs))
      .catch((err) => console.log(err));
  }, []);

  return <newsContext.Provider value={news}>{children}</newsContext.Provider>;
};

export default NewsContextProvider;
