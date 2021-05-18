import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Intro from "./layout/Intro";
import About from "./layout/About";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import ContactInfo from "./layout/ContactInfo";

import styled from "styled-components";

class App extends Component {
  render() {
    const WebContainer = styled.div`
      margin: 0;
      padding: 0;
      overflow: hidden;
      `;
    const MainSection = styled.div`
      display: flex;
      flex-direction: column;
      background: white;
      width: 100vw;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    `;
    const MainBackground = styled.div`
      display: flex;
      flex-direction: column;
      background: #eee;
      width: 95vw;
      justify-content: flex-start;
      align-items: center;
      border-radius: 10px;
      margin: 5vh;
    `;
    return (
      <WebContainer>
        <Header />
        <Intro />
        <MainSection>
          <MainBackground>
            <About />
            <Skills />
            <Projects />
          </MainBackground>
        </MainSection>
        <ContactInfo />
      </WebContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
