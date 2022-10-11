import React, { useState } from "react";
import "./VoteForm.css";
import deco1 from "../assets/leftmenu.svg";
import deco2 from "../assets/rightmenu.svg";
import deco3 from "../assets/right.png";
import deco4 from "../assets/left.png";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Radio, DatePicker, Upload } from "antd";
import Lastpage from "./Lastpage";
const { TextArea } = Input;

const VoteForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
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
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
          disabled={false}
        >
          <Form.Item label="Dishname">
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Category">
            <Radio.Group>
              <Radio value="Veg"> Veg </Radio>
              <Radio value="NonVeg"> Non-Veg </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Dish image" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
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
            <Button style={{ backgroundColor: "red", color: "white" }}>
              ADD
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VoteForm;
