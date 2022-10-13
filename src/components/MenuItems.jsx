import React from "react";
import { Card } from "antd";
import { Button } from "antd";
const { Meta } = Card;
import { useAuth } from "./AuthProvider";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const auth = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
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
  }, [auth.user]);
  const handleDelete = (e) => {
    const deleteId = e.target.value;
    console.log(deleteId);
    setMenuItems(([...items]) => {
      items.filter((item) => item.id != deleteId);
      return items;
    });
    console.log(menuItems);

    axios({
      method: "delete",
      url: "https://localhost:7018/api/Menu/deleteItem?id=" + deleteId,
      headers: { Authorization: "bearer " + auth.user },
    })
      .then((res) => {
        console.log("These are Menu Items" + menuItems);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          {menuItems
            .filter((filteritem) => filteritem.category == "Veg")
            .map((item, index) => (
              <Card
                hoverable
                key={index}
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
                    src={item.image}
                  />
                }
              >
                <Meta title={item.name} />
                <button
                  style={{
                    marginLeft: "63vw",
                    color: "white",
                    backgroundColor: "red",
                  }}
                  onClick={handleDelete}
                  value={item.id}
                >
                  Delete
                </button>
                <p style={{ fontSize: "13px" }}>{item.description}</p>
              </Card>
            ))}
        </div>
        <div className="symbol">
          <img
            src={pic9}
            style={{ width: "3vw", height: "3vw", margin: "20px 0px 20px" }}
          />
          <span> Non-Veg</span>
        </div>
        <div className="nonveg">
          {menuItems
            .filter((filteritem) => filteritem.category == "NonVeg")
            .map((item, index) => (
              <Card
                hoverable
                key={index}
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
                    src={item.image}
                  />
                }
              >
                <Meta title={item.name} />
                <button
                  style={{
                    marginLeft: "63vw",
                    color: "white",
                    backgroundColor: "red",
                  }}
                  onClick={handleDelete}
                  value={item.id}
                >
                  Delete
                </button>
                <p style={{ fontSize: "13px" }}>{item.description}</p>
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

export default Lastpage;
