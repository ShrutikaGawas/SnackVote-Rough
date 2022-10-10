import axios from "axios";
import { useAuth } from "./AuthProvider";
import deco3 from "../assets/right.png";
import deco4 from "../assets/left.png";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const onFinish = (values) => {
    console.log(values.username + " " + values.password);

    // axios.post("https://localhost:7018/api/User/login");
    axios({
      method: "post",
      url: "https://localhost:7018/api/User/login",
      data: {
        username: values.username,
        password: values.password,
      },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", "bearer" + res.data);
        auth.setLoggedIn("true");
        navigate("/Menu")
      })
      .catch((error) => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="login-header">
        <div className="login-name">
          <img
            src={deco4}
            style={{
              width: "100px",
              height: "100px",
              borderTopLeftRadius: "25px",
            }}
          />
          <h1>Sign in to your account </h1>
          <img
            src={deco3}
            style={{
              width: "100px",
              height: "100px",
              borderTopRightRadius: "25px",
            }}
          />
        </div>
        {/* <div>
          <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="username" />
          <input onChange={(e) => setUserPass(e.target.value)} type="password" placeholder="password" />
          <button onClick={handleSubmit}>Submit</button>
        </div> */}

        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 12,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;