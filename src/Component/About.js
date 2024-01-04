import React from 'react';
import "./About.css";
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Our Sports Equipment App</h1>
      <p>
        Welcome to our sports equipment app, where we strive to provide high-quality sports gear
        for enthusiasts and professionals alike.
      </p>
      <p>
        Our goal is to offer a wide range of sports equipment, from soccer balls to tennis rackets,
        ensuring that athletes have access to top-notch gear that enhances their performance.
      </p>
      <p>
        We collaborate with trusted manufacturers and suppliers to deliver durable, reliable, and
        innovative products that meet the needs of various sports and activities.
      </p>
      <p>
        At our app, we are passionate about sports and committed to helping athletes reach their
        full potential by offering the right tools and equipment they need.
      </p>
    </div>
  );
};

export default AboutPage;