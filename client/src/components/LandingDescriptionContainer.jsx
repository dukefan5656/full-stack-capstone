import React from "react";
import "./styles/LandingDescription.css";
import { Link } from "react-router-dom";
export default function LandingDescription() {
  return (
    <React.Fragment>
      <section className="landing-page">
        <div className="login">
          <Link to="/login">
            <button className="button">
              <span className="fa fa-user" />Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="button">
              <span className="fa fa-user" />Signup
            </button>
          </Link>
        </div>
      </section>
      <section className="landing-features" id="features">
        <h2>WE PUT THE POWER IN THE HANDS OF THE SELLER. </h2>
        <p>At YOUR MOVE, register as either a seller or an agent. 
          <br/>As a seller, you'll be creating listings that are available for agents to find and bid on.
          <br/>As an agent, you'll search for properties in your area which you will be able to submit bids on. 
          <br/>If you would like to demo the app without signing up, please click the login button and follow the instructions!</p>
        <div className="features-container">
          <div className="features">
            <div className="features-child">
              <div>
                <img
                  alt="screen icon"
                  src={require("./styles/images/screen.png")}
                />
                <span>
                  List your property and make it available for local agents to
                  find.
                </span>
              </div>
            </div>
            <div className="features-child">
              <img
                alt="house icon"
                src={require("./styles/images/house.png")}
              />
              <span>Agents will be able to search for properties.</span>
            </div>
            <div className="features-child">
              <img alt="sold icon" src={require("./styles/images/sold.png")} />
              <span>
                When you list your property, agents will bid on what they
                believe they can sell your property for. You're in control and
                will get the best possible price for your property!
              </span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
