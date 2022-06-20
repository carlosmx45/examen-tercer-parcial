import React, { Component } from "react";
import './MenuButton.js';
 
class MenuContainer extends Component {
    constructor(props, context) {
        super(props, context);
       
        this.state = {
          visible: false
        };
       
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
      }

      handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }

      toggleMenu() {
        this.setState({
            visible: !this.state.visible
            }
        );
      }

  render() {
    return (
      <div>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default MenuContainer;