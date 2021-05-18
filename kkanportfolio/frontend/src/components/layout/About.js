import React, { Component } from "react";

import styled from "styled-components";

export class About extends Component {
  render() {
    const AboutDiv = styled.div`
        display: flex;
        flex-direction: row;
        max-width: 70vw;
        margin: 15vh 10vw 5vw 10vw; 
    `;
    const DisplayPic = styled.img`
        border-radius: 50%;
        padding: 10px;
        width: 12vw;
        height: 12vw;
        margin: 20px;
    `;
    const TextDiv = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const H1 = styled.h1`
        margin-bottom: 5vh;
        font-weight: bold;
    `;
    const P = styled.p`

    `;
    return (
        <AboutDiv>
          <DisplayPic src={"https://www.k2e.com/wp-content/uploads/2018/09/person-icon.png"}/>
          <TextDiv>
            <H1>Hello, I'm Kevin. Welcome to my Website!</H1>
            <P>
              I recieved my Bachelor's of Engineering (Aerospace Engineering) in 2019. While in university, I specialized in the aircraft stream with an interest in aerodynamics, gas dynamics, and propulsion.
              In my first year of university I was introduced to programming which sparked my interest in software development, data analytics, and machine learning!
            </P>
            <P>
              I created this website to introduce myself, as well as showcase some of the projects I've done - both in engineering and software. If you have time, take a look at some of my projects below.
              Feel free to contact me! My information is given at the bottom of the page, or just click <a href="#">Contact</a> in the navigation bar! 
            </P>
            <P style={{fontWeight: "bold"}}>
              This website is still under construction and is constantly being updated. 
            </P>
            <P>
              With the recent pandemic caused by the virus SARS-CoV-2, it is important now more than ever to maintain proper hygiene and follow the recommended precautions. Stay safe!
            </P>
          </TextDiv>
        </AboutDiv>
    );
  }
}

export default About;
