import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      this.props.isLoggedIn === true && (
        <div>
          <h1>About the Co-Founders</h1>
          <div className="about-card">
            <img src="https://i.imgur.com/mJ0NvPe.jpg" alt="" />
            <div className="cofounder-info">
              <h3>Annabelle Taylor</h3>
              <p>blah blah blah</p>
            </div>
          </div>
          <div className="about-card">
            <img src="https://i.imgur.com/0cV0XWS.jpg" alt="" />
            <div className="cofounder-info">
              <h3>Cathy Le</h3>
              <p>blah blah blah</p>
            </div>
          </div>
          <div className="about-card">
            <img src="https://i.imgur.com/A8eQsll.jpg" alt="" />
            <div className="cofounder-info">
              <h3>Wesley Scholl (Konjo)</h3>
              <p>blah blah blah</p>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default About;
