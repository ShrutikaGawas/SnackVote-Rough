import React from "react";
import "./Admin.css";
import "antd/dist/antd.css";
import right from "../assets/rightmenu.svg";
import left from "../assets/leftmenu.svg";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Radio, DatePicker, Upload } from "antd";
import VoteForm from "./VoteForm";
import Lastpage from "./Lastpage";
import axios from "axios";

const { TextArea } = Input;

const Admin = () => {

  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  return (
    <div>
      <div className="admin-flexbox">
        <img
          src={left}
          alt=""
          style={{ float: "right" }}
          className="admin-image"
        />
        <div className="admin-middle">
          <h2>Today’s menu for polling</h2>
          <p>Add savoury dishes for today’s Snack Vote</p>
        </div>
        <img
          src={right}
          alt=""
          style={{ float: "right" }}
          className="admin-image"
        />
      </div>
      <VoteForm />
      <br />
      {/* <Lastpage/> */}
    </div>
  );
};
export default Admin;
