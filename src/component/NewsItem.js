import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, link, time, source } = props;
  return (
    <div className="mx-auto">
      <div className="card" style={{ width: "22rem" , margin: "auto" }}>
        <div>
          <span
            className=" badge rounded-pill bg-danger"
            style={{
              dispaly: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {source}
          </span>
        </div>

        <img
          src={
            !imageUrl
              ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p
            className="card-text"
            style={{ fontWeight: "small", color: "grey" }}
          >
            {" "}
            {new Date(time).toDateString()}
          </p>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
