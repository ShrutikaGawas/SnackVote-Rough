import React from "react";
import "./Menu.css";
import { Card } from "antd";
const { Meta } = Card;
import { Button } from "antd";
import "antd/dist/antd.css";
import left from "../assets/left.png";
import right from "../assets/right.png";
import pic1 from "../assets/img2.png";
import pic2 from "../assets/img3.png";
import pic3 from "../assets/img4.png";
import pic4 from "../assets/img5.png";
import pic5 from "../assets/img6.png";

const Menu = () => {
  return (
    <div className="bar">
      <div className="menu-flexbox">
        <img
          src={left}
          alt=""
          style={{ float: "right" }}
          className="menu-image"
        />
        <div className="menu-middle">
          <h2>Today's Menu</h2>
          <p>Check out the Menu and Vote</p>
          <div className="menu-button-flex">
            <Button
              style={{
                backgroundColor: "#80CC28",
                borderColor: "#80CC28",
                margin: "0px 20px",
              }}
              type="primary"
              size="medium"
            >
              Veg
            </Button>
            <Button
              style={{
                backgroundColor: "#e13020",
                borderColor: "#e13020",
                margin: "0px 20px",
              }}
              type="primary"
              size="medium"
            >
              Non-Veg
            </Button>
          </div>
        </div>
        <img
          src={right}
          alt=""
          style={{ float: "right" }}
          className="menu-image"
        />
      </div>

      <div className="align">
        <div className="top">
          <Card
            hoverable
            style={{
              width: 223,
            }}
            cover={<img alt="example" src={pic4} />}
          >
            <Meta
              title="Blue Beery Pancake"
              description="This is Blue Beery Pancake"
            />
            <div className="click">
              <Button  type="primary" size="medium">
                Vote
              </Button>
            </div>
          </Card>

          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pic3} />}
          >
            <Meta
              title="Sunny side eggs"
              description="Sunny eggs on toasted bread"
            />
            <div className="click">
              <Button type="primary" size="medium">
                Vote
              </Button>
            </div>
          </Card>

          <Card
            hoverable
            style={{
              width: 255,
            }}
            cover={<img alt="example" src={pic2} />}
          >
            <Meta
              title="cheesy omellete"
              description="Omellete filled with veggies"
            />
            <div className="click">
              <Button type="primary" size="medium">
                Vote
              </Button>
            </div>
          </Card>
        </div>

        <div className="bottom">
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pic1} />}
          >
            <Meta
              title="Tasty Fruity Cereal"
              description="Filled with oats and dry fruits"
            />
            <div className="click">
              <Button type="primary" size="medium">
                Vote
              </Button>
            </div>
          </Card>

          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={pic5} />}
          >
            <Meta
              title="Healthy salad"
              description="Tasty crunchy vegatable salad"
            />
            <div className="click">
              <Button type="primary" size="medium">
                Vote
              </Button>
            </div>
          </Card>

          <Card
            hoverable
            style={{
              width: 233,
            }}
            cover={<img alt="example" src={pic4} />}
          >
            <Meta
              title="Blue Beery Pancake"
              description="This is Blue Beery Pancake"
            />
            <div className="click">
              <Button type="primary" size="medium">
                Vote
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Menu;
