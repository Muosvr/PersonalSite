import React from 'react';

function Header() {
  return (
    <div style={{ marginTop: "50vh" }}>
      <p style={{ marginTop: "120px" }}>
        <span style={{ fontSize: "2vw", color: "white", marginLeft: "10vw" }}>My name is</span>
        <span style={{ fontSize: "5vw", color: "white", marginLeft: "2vw" }}>Jason Wu</span>
      </p>

      <br />
      <div style={{ marginTop: "10vh" }}>
        <span style={{ fontSize: "2vw", color: "white", marginLeft: "10vw" }}> I am a</span>
        <span style={{ fontSize: "3vw", color: "white", marginLeft: "2vw" }}>Full Stack Developer & Machine Learning Engineer</span>
      </div>

    </div>
  )
}

export default Header;