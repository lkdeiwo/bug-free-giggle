import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { useState, useEffect, useContext } from "react";
import "./featured.scss";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";

export default function Featured({ type }) {
  const [content, setContent] = useState({});
  const { user } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axiosInstance.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer " + user.accessToken,
            // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDFiZGI1N2IxY2JkYzRmYjlkNDMxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjM4NjE5MSwiZXhwIjoxNjMyODE4MTkxfQ.fOTEPBWlw6CPeKoE_2iqfU-8K-r3kwR_vnDVzCN9FKE",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option>Comedy</option>
            <option>Fantasy</option>
            <option>Historical</option>
            <option>Horror</option>
            <option>Sci-fi</option>
            <option>Thriller</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        {/* <img src={content.imgTitle} alt="" /> */}
        <br />
        <p className="desc">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          beatae totam? Fugit itaque blanditiis error quaerat minima
          accusantium, ea quod corrupti quae, sint incidunt cupiditate odit
          voluptates excepturi earum eligendi? */}
          {content.desc}
        </p>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
