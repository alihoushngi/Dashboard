import React, { useContext } from "react";
import { newsContext } from "../../../context/NewsContextProvider";
import Loader from "../../elements/Loader";
import Card from "../../elements/Card";
import { shorten, descShorten } from "../../../helpers";

const News = () => {
  const news = useContext(newsContext);

  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          {news.length === 0 ? (
            <Loader />
          ) : (
            news.map((blog) => {
              return (
                <Card
                  key={blog._id}
                  image={blog.image}
                  title={shorten(blog.title)}
                  description={descShorten(blog.text)}
                  link={`/news/${blog._id}`}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default News;
