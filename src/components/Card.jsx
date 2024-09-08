import React from "react";

const Card = ({ title, description, link, pubDate }) => {
  return (
    <a
      href={link}
      className="card"
      style={{
        display: "block",
        width: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "20px",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "relative",
        marginBottom: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "10px",
        }}
      >
        <h3
          style={{
            margin: "0",
            color: "#333",
            fontSize: "18px",
            fontWeight: "bold",
            flex: "1",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            fontSize: "14px",
            color: "#666",
            marginLeft: "10px",
          }}
        >
          {new Date(pubDate).toLocaleDateString()}
        </div>
      </div>
      <p
        style={{
          fontSize: "14px",
          color: "#666",
          lineHeight: "1.5",
          marginBottom: "15px",
        }}
      >
        {description}
      </p>
      <div
        style={{
          textAlign: "right",
          color: "#006e6d",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        Read More →
      </div>
    </a>
  );
};

export default Card;