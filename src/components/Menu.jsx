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
import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";
const Menu = () => {
  // Retrive Menu Items
  const auth = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    console.log(auth.userDetail);
    axios({
      method: "get",
      url: "https://localhost:7018/api/Menu/getitems",
      headers: { Authorization: "bearer " + auth.user },
    })
      .then((res) => {
        console.log(res.data);
        setMenuItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleVote = (e) => {
    const vote = e.target.name;
    const { hasVoted } = auth.userDetail;
    if (!hasVoted) {
      axios({
        method: "post",
        url: "https://localhost:7018/api/Vote/addvote?vote_item=" + vote,
        headers: { Authorization: "bearer " + auth.user },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else window.alert("Already Voted!");
  };

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
          {menuItems.map((item, index) => (
            <Card
              key={index}
              hoverable
              style={{
                width: 223,
              }}
              cover={<img alt="example" src={item.image} />}
            >
              <Meta title={item.name} description={item.description} />
              <div className="click">
                <button name={item.name} onClick={handleVote}>
                  Vote
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
