import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Particles from "react-particles-js";
import styled from "styled-components";

const NavHeader = styled.header`
  position: relative;
  width: 100vw;
  height: 625px;
  background: #36325c;
  color: #eee7e7;
  display: flex;
  flex-direction: column;

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.2rem;
  text-shadow: 2px 1px #96969b;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  z-index: 100;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;

  ${List} {
    li {
      margin: 16px;
      font-size: 1.2rem;
      font-weight: bold;

      a {
        cursor: pointer;
        color: #eee7e7;
        text-decoration: none;
        font-weight: 100;
        letter-spacing: 1px;
      }
    }
  }
`;

const LandingText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;

  > p {
    line-height: 50px;
    font-size: 2rem;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Header = () => {
  return (
    <NavHeader>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.25,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Nav>
        <Title>B</Title>
        <List>
          <li>
            <a href="https://github.com/brunoascenc">
              <AiFillGithub size={35} />
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
        </List>
      </Nav>
      <LandingText>
        <p>
          <BoldText>Hi,</BoldText> <br /> i'm <span className="shadow">B</span>
          runo <span className="shadow">A</span>scenção
          <br /> a Front-End Web Develper
        </p>
      </LandingText>
    </NavHeader>
  );
};

export default Header;
