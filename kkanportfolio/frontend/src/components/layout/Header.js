import React, { Component } from "react";

import styled from "styled-components";

export class Header extends Component {
  render() {
    const Navbar = styled.nav`
      position: fixed;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100vw;
      height: 5vh;
      max-width: 100%;
      background: #282828;
      overflow: hidden;
      z-index: 1;
    `;
    const Navlist = styled.ul`
      display: flex;
      flex-direction: row;
      margin-right: 2vw;
    `;
    const Li = styled.li`
      list-style: none;
      margin: auto 3vw;
      font-size: 1vw;
    `;
    const A = styled.a`
      text-decoration: none;
      color: white;
      &:hover {
        text-decoration: none;
        color: gray;
    `;
    return (
      <Navbar>
        <Navlist>
          <Li>
            <A href="#">About</A>
          </Li>
          <Li>
            <A href="#">Projects</A>
          </Li>
          <Li>
            <A href="#">Contact</A>
          </Li>
        </Navlist>
      </Navbar>
    );
  }
}

export default Header;
