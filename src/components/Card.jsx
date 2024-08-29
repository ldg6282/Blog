import React from "react";

const Card = ({ title, description, link, pubDate }) => {
  return (
    <a
      href={link}
      className="card"
      style={{
        display: "block",
        width: "100%",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.3s ease",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        {new Date(pubDate).toLocaleDateString()}
      </div>
      <div className="card-content">
        <h5 style={{ marginTop: 0, marginRight: "60px" }}>{title}</h5>
        <p style={{ fontSize: "15px" }}>{description}</p>
      </div>
    </a>
  );
};

export default Card;
