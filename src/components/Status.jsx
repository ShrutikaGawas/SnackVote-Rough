import React from "react";
import "./Status.css";
import { Card } from "antd";
const { Meta } = Card;
import { useAuth } from "./AuthProvider";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import axios from "axios";
import pic1 from "../assets/img2.png";
import pic2 from "../assets/img3.png";
import pic3 from "../assets/img4.png";
import pic4 from "../assets/img5.png";
import pic5 from "../assets/img6.png";
import pic6 from "../assets/rgt.jpg";
import pic7 from "../assets/lft.jpg";
import pic8 from "../assets/veg.png";
import pic9 from "../assets/nonve.png";
import pic10 from "../assets/food.png";

const Status = () => {
  const auth = useAuth();
  const { userRole } = auth.userDetail;
  const [voteItem, setVoteItem] = useState([]);
  useEffect(() => {
    console.log(auth.userDetail);
    axios({
      method: "get",
      url: "https://localhost:7018/api/Vote/getvotes",
      headers: { Authorization: "bearer " + auth.user },
    })
      .then((res) => {
        console.log(res.data);
        setVoteItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="intro">
        <img src={pic7} />

        <div className="words">
          <h1>Food Battle Status</h1>
          <p>Find out which food will be your Today's Snack</p>
        </div>
        <img src={pic6} />
      </div>

      <div className="status">
        <div className="veg">
          <img
            src={pic8}
            style={{ width: "3vw", height: "3vw", margin: "20px 0px 20px" }}
          />
          <span> Veg</span>
        </div>
        <div className="vegItem">
          {voteItem.map((vote, index) => (
            <Card
              key={index}
              hoverable
              style={{
                width: "max-content",
                display: "flex",
                height: 120,
              }}
              cover={
                <img
                  style={{
                    height: "90px",
                    width: "90px",
                    marginLeft: "12px",
                    marginTop: "10px",
                  }}
                  alt="example"
                  src={pic4}
                />
              }
            >
              <Meta title={vote.menuName} />
              <Progress
                style={{ width: "60vw" }}
                percent={(vote.count / voteItem.length) * 100}
                status="active"
              />
              <p style={{ fontSize: "12px" }}>{vote.count} Votes</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="down">
        <img src={pic10} style={{ width: "100%", height: "25vw" }} />
      </div>
    </div>
  );
};

export default Status;
