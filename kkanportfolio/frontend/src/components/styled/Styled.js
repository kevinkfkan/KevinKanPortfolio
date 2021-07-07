import styled from "styled-components";

// Main Section

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  margin: 10vh auto;
`;
export const Header = styled.h1`
  align-self: center;
  font-weight: bold;
  margin: 2vh auto;
  width: 100%;
  border-bottom: 1px solid #aaa
`;

// Projects Section

export const ProjectWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 35vh;
  width: 70vw;
  border: 2px solid black;
  margin: 5vh auto;
  color: black;
  &:focus, &:hover, &:link, &:visited, &:active {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ProjectImage = styled.img`
  width: 20%;
  margin: 2.5vh;
`;

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    margin: 2.5vh 0 0 0;
    font-size: 16px;
    overflow: auto;
`;

export const ProjectTitle = styled.h1`
    justify-content: left;
    font-weight: bold;
    font-size: 1.5vw;
    width: 95%;
    margin: 0 2.5vh 1.25vh 2.5vh;
    min-width: 15%;
`;

export const ProjectInfo = styled.p`
    width : 95%;
    height: 100%;
    margin: 0 0 0 2.5vh;
`;

export const ProjectBullets = styled.ul`
    min-height: 0;
    margin: 0;
    font-size: 14px;
`;