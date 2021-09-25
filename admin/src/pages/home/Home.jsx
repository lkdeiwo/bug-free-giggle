import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.scss";
// import { userData } from "../../dummyData";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// axios.defaults.proxy = "http://localhost:8800/api/";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosInstance.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDFiZGI1N2IxY2JkYzRmYjlkNDMxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTk0ODUyNCwiZXhwIjoxNjMyMzgwNTI0fQ.SAw2moH6W_l-CYzTlKW7iRCjFVDRsWQ6wAhlkGnUAcc",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
        setUserStats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      {/* <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div> */}
    </div>
  );
}
