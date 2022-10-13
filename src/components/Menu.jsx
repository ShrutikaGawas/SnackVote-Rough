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
  const { userRole } = auth.userDetail;

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
          location.reload();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else window.alert("Already Voted!");
  };

  const handleDelete = (e) => {
    const deleteId = e.target.value;
    console.log(deleteId);
    // setMenuItems(([...items]) => {
    //   items.filter((item) => item.id != deleteId);
    //   return items;
    // });
    console.log(menuItems);

    axios({
      method: "delete",
      url: "https://localhost:7018/api/Menu/deleteItem?id=" + deleteId,
      headers: { Authorization: "bearer " + auth.user },
    })
      .then((res) => {
        location.reload();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
                {userRole != "Admin" ? (
                  <button name={item.name} onClick={handleVote}>
                    Vote
                  </button>
                ) : (
                  <button value={item.id} onClick={handleDelete}>
                    Delete
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
