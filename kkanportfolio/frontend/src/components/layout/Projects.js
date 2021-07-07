import React, { Component } from "react";

import styled from "styled-components";

import { Wrapper, Header } from "../../components/styled/Styled";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Capstone from "../projects/engineering/Capstone";
import CompositeLaminate from "../projects/engineering/CompositeLaminate";

import Portfolio from "../projects/software/Portfolio";
import Spotify from "../projects/software/Spotify";

export class Projects extends Component {
  render() {
    const TabDiv = styled.div`
      justify-content: center;
      width: 100%;
      margin: 5vh 0 5vh 0;
    `;
    const StyledTabs = styled(Tabs)`
      font-size: 24px;
      width: 100%;
    `;
    const P = styled.p``;
    const StyledTab = styled(Tab)``;
    return (
      <Wrapper>
        <Header>PROJECTS</Header>
        <P>
          These are some of the projects that I have completed. The projects below are categorized based on if they are
          engineering or software related. Click on the tabs below to switch
          between the two. Links are applicable to see the projects in more
          detail when applicable.
        </P>
        <TabDiv>
          <StyledTabs defaultActiveKey="engineering" id="projects-tabs">
            <StyledTab eventKey="engineering" title="Engineering">
              <Capstone />
              <CompositeLaminate />
            </StyledTab>
            <StyledTab eventKey="software" title="Software">
              <Spotify />
              <Portfolio />
            </StyledTab>
          </StyledTabs>
        </TabDiv>
        
      </Wrapper>
    );
  }
}

export default Projects;
