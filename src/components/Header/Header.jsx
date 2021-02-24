import React from "react";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

const NavHeader = styled.header`
  width: 100vw;
  height: 600px;
  background: red;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  width: 100%;
  background: blue;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;

  > ul {
    list-style: none;
    display: flex;

    li {
      margin: 12px;
      font-size: 1.3rem;
      font-weight: bold;

      a {
        color: #1d1c1c;
        text-decoration: none;
      }
    }
  }
`;

const LandingText = styled.div`
  display: flex;
  align-items: center;
  background: yellow;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;

  >h1{
    line-height: 50px;
  }
`;

const Header = () => {
  return (
    <NavHeader>
      <Nav>
        <h1>B</h1>
        <ul>
          <li>
            <a href="https://github.com/brunoascenc">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/brunoascenc">About</a>
          </li>
          <li>
            <a href="https://github.com/brunoascenc">Projects</a>
          </li>
          <li>
            <a href="https://github.com/brunoascenc">Contact</a>
          </li>
        </ul>
      </Nav>
      <LandingText>
        <h1>
          Hi, <br /> i'm Bruno Ascenção
          <br /> a Front-End Web Develper
        </h1>
      </LandingText>
    </NavHeader>
  );
};

export default Header;
