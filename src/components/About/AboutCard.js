import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I've had a life-long passion for coding that started with a simple pastime of coding in Scratch, eventually leading me to take
            my first intro to Java in highschool. From there I learned about data structures and algorithms, developing algorithms in Objective-C
            for trees, graphs, and sorting, while dabbling with IOS UIs using the SDK in Xcode. 
            <br/>
            <br/>
            At Northeastern, I got to open the can of worms known as code maintainability through my object-oriented design class,
            and refreshed my memory of Statistics and Linear, with a brief peak at binary classification algorithms. I also became comfortable
            with the Linux command line through which I completed projects for my Cybersecurity and Systems classes that ranged from password cracking and
            CTFs to coding a mini-shell and a file system in C. One of my latest ventures has been learning the full-stack development process for both Android and web apps, and exploring the process and best
            practices for those fields.
            <br/>
            <br/>
            Outside of class, I've worked as a software engineer intern doing full-stack web development for Tectra (IpserLab), a startup 
            for connecting university technology with corporations. I've also worked to develop, update, and maintain website content 
            using the WordPress CMS as the primary point-of-contact for the website user experience for NU-RES and its partners.
            <br/>
            <br/>
            Please see below for the full list of technical skills and tools I've used.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
