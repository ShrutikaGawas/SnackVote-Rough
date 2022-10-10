import React from "react";
import { Card } from "antd";
import { Button } from "antd";
const { Meta } = Card;
import "./Lastpage.css";
import "antd/dist/antd.css";
import pic1 from "../assets/img2.png";
import pic2 from "../assets/img3.png";
import pic3 from "../assets/img4.png";
import pic4 from "../assets/img5.png";
import pic5 from "../assets/img6.png";
import pic6 from "../assets/rightpic.svg";
import pic7 from "../assets/leftpic.svg";
import pic8 from "../assets/veg.png";
import pic9 from "../assets/nonve.png";
import pic10 from "../assets/food.png";
import TextArea from "antd/lib/input/TextArea";

const Lastpage = () => {
  return (
    <div>
      <div className="intro">
        <img src={pic7} />

        <div className="words">
          <h1>Today’s Menu for the Day</h1>
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
            <Button
              style={{
                marginLeft: "63vw",
                color: "white",
                backgroundColor: "red",
              }}
            >
              Delete
            </Button>
            <p style={{ fontSize: "13px" }}>This is a blueberry pancake</p>
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
            <Button
              style={{
                marginLeft: "63vw",
                color: "white",
                backgroundColor: "red",
              }}
            >
              Delete
            </Button>
            <p style={{ fontSize: "13px" }}>A tasty party of fruits and nuts</p>
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
            <Button
              style={{
                marginLeft: "63vw",
                color: "white",
                backgroundColor: "red",
              }}
            >
              Delete
            </Button>
            <p style={{ fontSize: "13px" }}>
              Healthy sprouts salad tossed in virgin olive oil
            </p>
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
            <Button
              style={{
                marginLeft: "63vw",
                color: "white",
                backgroundColor: "red",
              }}
            >
              Delete
            </Button>
            <p style={{ fontSize: "13px" }}>
              Healthy herbs with a Crunch of fried chicken
            </p>
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
            <Button
              style={{
                marginLeft: "63vw",
                color: "white",
                backgroundColor: "red",
              }}
            >
              Delete
            </Button>
            <p style={{ fontSize: "13px" }}>
              Egg fried until yolk is silken smooth
            </p>
          </Card>
        </div>
      </div>

      <div className="down">
        <img src={pic10} style={{ width: "100%", height: "25vw" }} />
      </div>
    </div>
  );
};

export default Lastpage;
