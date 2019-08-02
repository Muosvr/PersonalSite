import React from 'react';

function LandingPage(props) {

  const s1Height = props.s1Height || 1200;
  const s2Height = props.s2Height || 1500;
  const s3Height = props.s3Height || 1000;
  const s1Color = props.s1Color || "#303233";
  const s2Color = props.s2Color || "#e3e3e3";
  const s3Color = props.s3Color || "#303233";
  return (
    <div >
      <div
        style={{
          width: "100%",
          height: String(s1Height) + "px",
          backgroundColor: s1Color,
          top: 0,
          position: "absolute",
          zIndex: "-1"
        }} ></div>

      <div
        style={{
          width: "100%",
          height: String(s2Height) + "px",
          backgroundColor: s2Color,
          top: String(s1Height) + "px",
          position: "absolute",
          zIndex: "-1"
        }}></div>
      <div
        style={{
          width: "100%",
          height: String(s3Height) + "px",
          backgroundColor: s3Color,
          top: String(s2Height + s3Height) + "px",
          position: "absolute",
          zIndex: "-1"
        }}></div>



    </div>
  )
}

export default LandingPage;