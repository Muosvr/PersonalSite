import React from 'react';
import files from './FileLoader';

export default function Home() {
  return (
    <div id="home" style={{ backgroundColor: "#303233", padding: "10vw", paddingTop: "15vh" }}>

      <h1 style={{ fontSize: "80px", color: "white" }} >Hello!</h1>
      <p style={{ marginTop: "120px", lineHeight: "50px" }}>
        <span style={{ fontSize: "30px", color: "white" }}>My name is</span>
        <span style={{ fontSize: "50px", color: "white", marginLeft: "20px" }}>Jason Wu</span>
      </p>

      <br />
      <p style={{ marginTop: "10vh", lineHeight: "50px" }}>
        <span style={{ fontSize: "30px", color: "white" }}> I am a</span>
        <span style={{ fontSize: "40px", color: "white", marginLeft: "20px" }}>Full Stack Developer & Machine Learning Engineer</span>
      </p>
      <div style={{ textAlign: "center", marginTop: "5vh" }}>
        <img alt='scrolldrown' src={files.scrollDown} style={{ width: "30px", margin: "auto" }}></img>
      </div>


    </div>
  )
}