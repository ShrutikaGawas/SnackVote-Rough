import React from "react";
import "./Status.css";
import { Card } from "antd";
const { Meta } = Card;
import { Progress } from "antd";
import "antd/dist/antd.css";
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
          <Card
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
            <Meta title="Blue Beery Pancake" />
            <Progress style={{ width: "60vw" }} percent={8} status="active" />
            <p style={{ fontSize: "12px" }}>8 votes</p>
          </Card>

          <Card
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
                src={pic1}
              />
            }
          >
            <Meta title=" Tasty fruit cereal" />
            <Progress style={{ width: "60vw" }} percent={38} status="active" />
            <p style={{ fontSize: "12px" }}>38 votes</p>
          </Card>

          <Card
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
                src={pic5}
              />
            }
          >
            <Meta title="Sprouts Fiesta" />
            <Progress style={{ width: "60vw" }} percent={20} status="active" />
            <p style={{ fontSize: "12px" }}>20 votes</p>
          </Card>
        </div>
        <div className="symbol">
          <img
            src={pic9}
            style={{ width: "3vw", height: "3vw", margin: "20px 0px 20px" }}
          />
          <span> Non-Veg</span>
        </div>
        <div className="nonveg">
          <Card
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
                src={pic2}
              />
            }
          >
            <Meta title="Crunchy Chicken Salad" />
            <Progress style={{ width: "60vw" }} percent={55} status="active" />
            <p style={{ fontSize: "12px" }}>55 votes</p>
          </Card>

          <Card
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
                src={pic3}
              />
            }
          >
            <Meta title="Sunny Side Eggs" />
            <Progress style={{ width: "60vw" }} percent={20} status="active" />
            <p style={{ fontSize: "12px" }}>20 votes</p>
          </Card>
        </div>
      </div>

      <div className="down">
        <img src={pic10} style={{ width: "100%", height: "25vw" }} />
      </div>
    </div>
  );
};

export default Status;
