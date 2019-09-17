import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { content } from '../config';

class MenuBar extends Component {
  constructor(props) {
    super();
    this.state = {
      activeItem: null,
      leftmenu: ''
    }
    this.serverContent = content;
  }

  observerOptions = {
    threshold: 0.3,
    root: null,
    rootMargin: '0px'
  }
  observedElements = ['home', 'portfolio', 'contact']
  handleObserve = (entries, observer) => {
    entries.forEach(entry => {
      const item = entries[0].target.id
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.3) {
          this.setState({ activeItem: item })
        }
      }
    })
  }

  componentDidMount() {
    this.observedElements.forEach(id => {
      const e = document.getElementById(id);
      if (e) {
        const observer = new IntersectionObserver(
          this.handleObserve,
          this.observerOptions
        )
        observer.observe(e);
      }
    })
  }

  updateLeftMenu = () => {
    const leftmenu = this.serverContent.menubar.left.map((item, i) => {
      return (
        <Menu.Item
          active={this.state.activeItem === String(item.text.toLowerCase())}
          key={String(i) + '-left'}
          as='a'
          id={item.text + '-menu'}
          href={item.link}
          target={item.target}
        >
          {item.text}
        </Menu.Item >
      )
    })

    return leftmenu
  }

  rightMenu = content.menubar.right.reverse().map((item, i) => {
    const iconSpacing = 54;
    return (
      <Menu.Item
        key={String(i) + '-right'}
        as='a'
        name={item.text + '-menu'}
        href={item.link}
        target="_blank"
        style={{ position: "absolute", right: iconSpacing * i }}
      >
        <Icon name={item.icon} />
      </Menu.Item>
    )
  })

  render() {
    return (
      <Menu inverted style={{ position: "fixed", top: 0, width: "100%", zIndex: 100 }}>
        {this.updateLeftMenu()}
        {this.rightMenu}
      </Menu>
    )
  }
}

export default MenuBar;