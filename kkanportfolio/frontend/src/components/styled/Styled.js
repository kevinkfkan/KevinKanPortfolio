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
  width: 90%;
  border: 2px solid black;
  margin: 5vh auto;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #aaa;
    cursor: pointer;
  }
`;

export const ProjectImage = styled.img`
/*   border: 2px solid blue; */
  width: 25%;
  margin: 2.5vh;
`;

export const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 32.5vh;
    margin: 2.5vh 0 0 0;
/*     border: 2px solid grey; */
`;

export const ProjectTitle = styled.h1`
    justify-content: left;
    font-weight: bold;
/*     border: 2px solid red; */
    width: 95%;
    height: 15%;
    margin: 0 2.5vh 1.25vh 2.5vh;
`;

export const ProjectInfo = styled.p`
    width : 95%;
    height: 100%;
/*     border: 2px solid red; */
    margin: 1.25vh 2.5vh 0 2.5vh;
`;
