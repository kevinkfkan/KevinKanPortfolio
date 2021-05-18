import React, { Component } from "react";

import styled from "styled-components";

import { bounce } from "../animations/Bounce";
import { flash } from "../animations/Flash";

import { ResumeButton } from "../styled/Buttons";

import { IconContext } from "react-icons";
import { AiOutlineDownload, AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";

export class Intro extends Component {
  render() {
    const Wrapper = styled.section`
      display: flex;
      flex-direction: column;
      background: #000;
      width: 100%;
      height: 100vh;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
    `;
    const Title = styled.h1`
      color: #fff0f5;
      text-align: center;
      font-size: 2vw;
      margin: 40vh auto 0vh auto;
    `;
    const Intro = styled.p`
      color: #fff0f5;
      text-align: center;
      font-size: 1vw;
      margin: 2vh;
      margin-bottom: 10vh;
    `;
    const Ul = styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 2vh 25vw auto 22.5vw;
    `;
    const Li = styled.li`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: auto 1vw;
      &:hover {
        animation: ${bounce} 1.5s linear infinite;
      }
    `;
    const ArrowWrap = styled.div`
      margin-bottom: 2vh;
      animation: ${flash} 2s ease-in infinite
    `;

    return (
      <Wrapper>
        <Title>Kevin Kan</Title>
        <Intro>Aerospace Engineering graduate with a passion for software development and data analytics.</Intro>
        <ResumeButton 
        href="https://drive.google.com/file/d/1wFvzLk4Fzb3gMji4eUSIhtx445EyfPly/view?usp=sharing" 
        target="_blank" textDecoration="none">
          Résumé
          <IconContext.Provider value={{ color: "white", size: "1.5em", justifySelf: "flex-end"}}>
            <AiOutlineDownload />
          </IconContext.Provider>
        </ResumeButton>
        <Ul>
          <Li>
            <a href="https://github.com/kevinkfkan" target="_blank">
              <IconContext.Provider value={{ color: "white", size: "3em" }}>
                <AiFillGithub />
              </IconContext.Provider>
            </a>
          </Li>
          <Li>
            <a href="https://www.linkedin.com/in/kevin-kan-024767188/" target="_blank">
              <IconContext.Provider value={{ color: "white", size: "3em" }}>
                <AiFillLinkedin />
              </IconContext.Provider>
            </a>
          </Li>
          <Li>
            <a href={"mailto:${email}"} >
              <IconContext.Provider value={{ color: "white", size: "3em" }}>
                <AiOutlineMail />
              </IconContext.Provider>
            </a>
          </Li>
        </Ul>
        <ArrowWrap>
          <IconContext.Provider value={{ color: "gray", size: "3em" }}>
            <BsChevronDoubleDown />
          </IconContext.Provider>
        </ArrowWrap>
      </Wrapper>
    );
  }
}

export default Intro;
