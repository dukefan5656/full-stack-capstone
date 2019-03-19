import React from "react";
import LandingNavbar from "./LandingNavbarContainer";
import LandingDescription from "./LandingDescriptionContainer";
import "./styles/landing-page.css";

export default function LandingPage() {

  return (
    <div className="main" >

      <LandingNavbar />

      <div className="description">
        <LandingDescription />
      </div>
      <button onClick={event => {
    event.preventDefault();
    return fetch("http://localhost/hello").then(res => console.log(res))}}>
    
    Test wo port</button>
    <button onClick={event => {
    event.preventDefault();
    return fetch(`http://localhost:${process.env.PORT}/hello`).then(res => console.log(res))}}>
    
    Test with port</button>

    </div>
  );
}
