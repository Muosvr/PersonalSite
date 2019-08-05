import React from 'react';
import files from './FileLoader';

export default function Home() {
  return (
    <div id="home" style={{ backgroundColor: "#303233", paddingTop: "35vh", paddingBottom: "10vh" }}>

      <h1 style={{ fontSize: "5vw", marginLeft: "10vw", color: "white" }} >Hello!</h1>
      <p style={{ marginTop: "120px" }}>
        <span style={{ fontSize: "2vw", color: "white", marginLeft: "10vw" }}>My name is</span>
        <span style={{ fontSize: "5vw", color: "white", marginLeft: "2vw" }}>Jason Wu</span>
      </p>

      <br />
      <div style={{ marginTop: "10vh" }}>
        <span style={{ fontSize: "2vw", color: "white", marginLeft: "10vw" }}> I am a</span>
        <span style={{ fontSize: "3vw", color: "white", marginLeft: "2vw" }}>Full Stack Developer & Machine Learning Engineer</span>
      </div>
      <div style={{ textAlign: "center", marginTop: "5vh" }}>
        <img alt='scrolldrown' src={files.scrollDown} style={{ width: "2vw", margin: "auto" }}></img>
      </div>


    </div>
  )
}