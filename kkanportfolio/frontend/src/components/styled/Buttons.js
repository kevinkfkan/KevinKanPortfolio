import styled from "styled-components";

export const Button = styled.a`
  display: inline-flex;
  background: transparent;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  width: 10%;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const ResumeButton = styled(Button)`
  width: 12%;
  color: white;
  border: 2px solid white;
  margin-top: 10vh;
  flex-direction: row;
  justify-content: space-between;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: white;
  }
  &:hover {
    
  }
`;

export const ReadMore = styled(Button)`
  justify-self: flex-end;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 5vw;
  font-size: 12px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: black;
  }
  border: none;
`;

