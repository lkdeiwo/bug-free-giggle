import { ArrowBackIosOutlined } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router";
import "./watch.scss";
import { Link } from "react-router-dom";

export default function Watch() {
  const location = useLocation();
  console.log(location);
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIosOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        muted
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}
