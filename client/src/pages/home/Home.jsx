import { React, useContext, useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import { AuthContext } from "../../authContext/AuthContext";
// axios.defaults.proxy = "http://localhost:8800/api/";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getRandomLists = async () => {
      console.log(type);
      try {
        const res = await axiosInstance.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer " + user.accessToken,
            },
          }
        );
        console.log(res.data[0]);
        setLists(res.data);
      } catch (err) {
        console.log("an err");
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;
