import React, { Component } from "react";

import styled from "styled-components";

import {
  AiFillPhone,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { IconContext } from "react-icons";

export class ContactInfo extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      background: #000;
      width: 100vw;
      height: 20vh;
    `;
    const InfoPlacement = styled.div`
/*         border: 2px solid white; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 25vw;
        height: 20vh;
        margin: auto 2vw; auto auto;
    `;
    const Ul = styled.ul`
      list-style-type: none;
    `;
    const Li = styled.li`
/*         border: 2px solid white; */
        margin: 1vh;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `;
    const P = styled.p`
      color: white;
      align-self: flex-end;
      margin: 0 5vw;
    `;
    const A = styled.a`
      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
        color: white;
      }
    `;
    const InfoDiv = styled.div`
      color: white;
      margin-left: 1vw;
    `;
    return (
      <Wrapper>
        <InfoPlacement>
          <Ul>
          <Li>
              <IconContext.Provider value={{ color: "white", size: "1.5em", justifySelf: "flex-end" }}>
                <AiOutlineMail />
              </IconContext.Provider>
              <InfoDiv>
                  kevin.kf.kan@gmail.com
              </InfoDiv>
            </Li>
            <Li>
              <IconContext.Provider value={{ color: "white", size: "1.5em", justifySelf: "flex-end" }}>
                <AiFillPhone />
              </IconContext.Provider>
              <InfoDiv style={{ marginLeft: "1vw", }}>
                (647) 991-2333
              </InfoDiv>
            </Li>
            <Li>
              <IconContext.Provider value={{ color: "white", size: "1.5em", justifySelf: "flex-end" }}>
                <AiFillLinkedin />
              </IconContext.Provider>
              <InfoDiv as="a" href="https://www.linkedin.com/in/kevin-kan-024767188/">
                https://www.linkedin.com/in/kevin-kan-024767188/
              </InfoDiv>
            </Li>
            <Li>
              <IconContext.Provider value={{ color: "white", size: "1.5em", justifySelf: "flex-end" }}>
                <AiFillGithub />
              </IconContext.Provider>
              <InfoDiv as="a" href="https://github.com/kevinkfkan">
                https://github.com/kevinkfkan
              </InfoDiv>
            </Li>
          </Ul>
        </InfoPlacement>
      </Wrapper>
    );
  }
}

export default ContactInfo;
