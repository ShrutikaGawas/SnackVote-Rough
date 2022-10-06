import React from "react";
import './Status.css';
import { Card } from 'antd';
const { Meta } = Card;
import { Progress } from 'antd';
import "antd/dist/antd.css";
import pic1 from "../assets/img2.png";
import pic2 from "../assets/img3.png";
import pic3 from "../assets/img4.png";
import pic4 from "../assets/img5.png";
import pic5 from "../assets/img6.png";
import pic6 from "../assets/rgt.svg";
import pic7 from "../assets/lft.svg";
import pic8 from "../assets/veg.png";
import pic9 from "../assets/nonve.png";

const Status = () => {
  return <div>
<div className="intro">
<img src={pic6}  />

<div className="words">
<h1>Food Battle Status</h1>
<p>Find out which food will be your Today's Snack</p>
</div>
<img src={pic7}/>
</div>

<div className="veg">
<img src={pic8} style={{width:'40px',height:'40px',margin:"20px 0px 20px"}}/> <span>Veg</span>
<div className="vegItem">
<Card
    hoverable
    style={{
      width: 223,
    }}
    cover={<img alt="example" src={pic4} />}
  >
    <Meta title="Blue Beery Pancake" description="8 Votes" />
    <Progress percent={8} status="active" />
  </Card>

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={pic1} />}
  >
    <Meta title=" Tasty fruit cereal" description="38 Votes " />
    <Progress percent={38} status="active" />
  </Card>

  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={pic5} />}
  >
    <Meta title="Sprouts Fiesta" description="20 Votes" />
    <Progress percent={20} status="active" />
  </Card>
       </div>
       </div>
</div>


};

export default Status;
