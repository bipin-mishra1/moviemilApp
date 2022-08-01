import React from 'react'
// import React from "react";
import ReactDOM from "react-dom";
import om from '../../images/om.png'
import bipin from '../../images/bipin.jpg'
import vraj from '../../images/vraj.jpeg'
import chintan from '../../images/chintan.jpeg'
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
} from "./ContactCard";
// import "./styles.css";

export default function ContactUs() {
    return (
    <div className="App" style={{display: "flex", gap: "2rem", flexWrap: "wrap" ,textAlign : "center"}}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Om Tita</CardHeading>
        </CardHeader>

        <CardBody>
            <img src={om} alt="" srcset="" width={'100%'} height={'auto'} style={{marginBottom: "10px",   borderRadius: "50%"}}/>
          <b>Web Developer</b>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Bipin Mishra</CardHeading>
        </CardHeader>

        <CardBody>
            <img src={bipin} alt="" srcset="" width={'100%'} height={'auto'} style={{marginBottom: "10px",   borderRadius: "50%"}}/>
          <b>Web Developer</b>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Vraj Chaudhary</CardHeading>
        </CardHeader>

        <CardBody>
            <img src={vraj} alt="" srcset="" width={'100%'} height={'auto'} style={{marginBottom: "10px",   borderRadius: "50%",
    height: "229px",
    width: "90%"
}}/>
          <b>Web Developer</b>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Chintan Gamit</CardHeading>
        </CardHeader>

        <CardBody>
            <img src={chintan} alt="" srcset="" width={'100%'} height={'auto'} style={{marginBottom: "10px",   borderRadius: "50%"}}/>
          <b>Web Developer</b>
        </CardBody>
      </CardWrapper>
    </div>
    )
}
