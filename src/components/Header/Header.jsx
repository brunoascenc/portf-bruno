import React from "react";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

const NavHeader = styled.header`
  height: 85px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
  }

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
    </NavHeader>
  );
};

export default Header;
