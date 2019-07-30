import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { content } from '../config';

function Sidebar(props) {
  const menu = Object.keys(content.sidebar.menu).map((key, i) => {
    return (
      <Menu.Item
        as='a'
        href={content.sidebar.menu[key]}
        key={i}
        style={{ textAlign: "center" }}
      >
        {key}
      </Menu.Item>
    )
  })
  return (
    <div style={{
      position: "fixed",
      left: "0",
      width: props.width,
      backgroundColor: "#1b1c1d",
      height: "100%"
    }}>
      <Menu
        style={{ width: "100%" }}
        vertical
        inverted
      >
        <Menu.Item>
          <Image
            style={{
              margin: "auto",
              marginTop: "20px",
              marginBottom: "20px"
            }}
            src={content.sidebar.image} />
        </Menu.Item>
        <Menu.Item>
          <p style={{ textAlign: "left" }}>
            {content.sidebar.bio}
          </p>
        </Menu.Item>
        {menu}
      </Menu>

    </div>
  )
}

export default Sidebar;