import React from "react";

export default function DubbingServices(props) {
  return (
    <div
      className="col-md-4 col-12"
      style={{ color: "#2a3d78", margin: "19px 0px" }}
    >
      <div
        style={{
          padding: "1.5rem",
          height: "100%",
          backgroundColor: "#f6f6f6",
        }}
      >
        <div className="text-center pb-3">
          <img
            src={props.img}
            style={{ height: "200px", width: "315px" }}
          ></img>
        </div>
        <h4 className="text-center pb-4" style={{ fontWeight: "600" }}>
          {props.title}
        </h4>
        <p style={{ fontSize: "18px" }}>{props.content}</p>
      </div>
    </div>
  );
}
