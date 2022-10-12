import axios from "axios";
import React, { useState } from "react";
import "./VoteForm.css";

import { useAuth } from "./AuthProvider";
import deco1 from "../assets/leftmenu.svg";
import deco2 from "../assets/rightmenu.svg";
import deco3 from "../assets/right.png";
import deco4 from "../assets/left.png";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Radio, DatePicker, Upload } from "antd";
import Lastpage from "./Lastpage";
const { TextArea } = Input;

const VoteForm = () => {
  
  const auth = useAuth();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [imageFile,setImageFile] = useState([]);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  const dummyRequest = async ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const imageUploadProps = { 
    multiple: false,
    maxCount: 1,
    customRequest: dummyRequest,
    onChange(info) {
      const { status } = info.file;
      console.log("status=",status);
      /converting to base 64/
      if (status === "done") {
        const file = info.file.originFileObj;
        setImageFile(file);
      } else if (status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const onFinish = (values) => {
    console.log(values.dishname + " " + values.description+ " " + values.category+ " "+values.image);
    let formData = new FormData();
    formData.append("name", values.dishname);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("image", imageFile);
    console.log(formData);
    axios({
      method: "post",
      url: "https://localhost:7018/api/Menu/additem",
      headers:{"Authorization":"bearer "+localStorage.getItem('user')},
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", res.data);
        auth.setLoggedIn(true);
        auth.setUser(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="border">
      <div className="form-header">
        <div className="form-name">
          <img src={deco4} style={{ width: "100px", height: "100px" }} />
          <h1>Add Menu Dishes</h1>
          <img src={deco3} style={{ width: "100px", height: "100px" }} />
        </div>
        <Form
        name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onFinish={onFinish}
          onValuesChange={onFormLayoutChange}
          disabled={false}
        >
          <Form.Item label="Dishname" name="dishname">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Radio.Group>
              <Radio value="Veg"> Veg </Radio>
              <Radio value="NonVeg"> Non-Veg </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Dish image" name="upload">
            <Upload {...imageUploadProps}>
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                    width: 50,
                  }}
                ></div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="">
            <Button style={{ backgroundColor: "red", color: "white" }} htmlType="submit">
              ADD
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VoteForm;
