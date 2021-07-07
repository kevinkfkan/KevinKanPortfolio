import React, { Component } from "react";

import styled from "styled-components";

import { Wrapper, Header } from "../../components/styled/Styled";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Ansys from "../../assets/images/logos/ansys.png";
import Catia from "../../assets/images/logos/catia.png";
import Matlab from "../../assets/images/logos/matlab.png";
import Python from "../../assets/images/logos/python.png";
import JavaScript from "../../assets/images/logos/javascript.png";
import GitHub from "../../assets/images/logos/github.png";
import HTML from "../../assets/images/logos/html.png";
import CSS from "../../assets/images/logos/css.png";
import LaTeX from "../../assets/images/logos/latex.png";
import XFLR5 from "../../assets/images/logos/xflr5.png";
import Excel from "../../assets/images/logos/excel.png";
import Jupyter from "../../assets/images/logos/jupyter.png";
import Pandas from "../../assets/images/logos/pandaslibrary.png";

export class Skills extends Component {
  render() {
    const IconName = styled.p``;
    const StyledContainer = styled(Container)`
      width: 70%;
    `;
    const StyledRow = styled(Row)``;
    const StyledCol = styled(Col)`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: white;
      height: 15vh;
      margin: 10px;
    `;
    const IconImg = styled.img`
      width: 3vw;
      margin-top: auto;
      margin-bottom: 1vh;
    `;
    return (
      <Wrapper>
        <Header>SKILLS</Header>
        <StyledContainer>
          <StyledRow>
            <StyledCol>
              <IconImg src={Ansys} />
              <IconName>ANSYS</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={Catia} />
              <IconName>Catia V5</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={Matlab} />
              <IconName>MATLAB</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={Excel} />
              <IconName>Microsoft Excel</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={LaTeX} />
              <IconName>LaTeX</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={XFLR5} />
              <IconName>XFLR5</IconName>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol>
              <IconImg src={Python} />
              <IconName>Python</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={JavaScript} />
              <IconName>JavaScript</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={GitHub} />
              <IconName>GitHub</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={Pandas} />
              <IconName>pandas</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={Jupyter} />
              <IconName>Jupyter Lab</IconName>
            </StyledCol>
            <StyledCol>
              <IconImg src={CSS} />
              <IconName>CSS</IconName>
            </StyledCol>
          </StyledRow>
          <StyledRow>
            <StyledCol>
              <IconImg src={HTML} />
              <IconName>HTML</IconName>
            </StyledCol>
            <StyledCol style={{ visibility: "hidden" }}></StyledCol>
            <StyledCol style={{ visibility: "hidden" }}></StyledCol>
            <StyledCol style={{ visibility: "hidden" }}></StyledCol>
            <StyledCol style={{ visibility: "hidden" }}></StyledCol>
            <StyledCol style={{ visibility: "hidden" }}></StyledCol>
          </StyledRow>
        </StyledContainer>
      </Wrapper>
    );
  }
}

export default Skills;
