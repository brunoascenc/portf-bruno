import React from "react";
import Movix from "../../assets/movix-dktp.png";
import Hzone from "../../assets/hzone-dktp.png";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #494646;
  letter-spacing: 1px;
  font-weight: 100;
  font-size: 2.3rem;
  margin-bottom: 25px;
  margin-top: 65px;
  &::after {
    content: "";
    background: #666060;
    width: 50px;
    height: 1px;
    margin-top: 7px;
  }
`;

const ProjectLinks = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  a {
    display: flex;
    align-items: center;
    margin: 10px;
    color: #1a1818;

    p {
      margin-left: 5px;
      border-bottom: dotted 1px #1a1818;
    }
  }
`;

const ImgContainer = styled.div`
  width: 600px;
  padding: 5px 5px 10px 5px;
  border-radius: 3px;

  img {
    max-width: 100%;
    border-radius: 2px;
  }
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  ${Title} {
    margin-bottom: 65px;
  }
`;

const ProjectDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HzoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  margin-bottom: 100px;
  ${ProjectDetail} {
    h2 {
      color: #f1324c;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  ${ImgContainer} {
    padding: 25px;
    a {
      color: black;
    }
  }

  img {
    box-shadow: 20px 20px #f53a53;
  }
`;

const MovixContainer = styled(HzoneContainer)`
  background: unset;
  flex-direction: row-reverse;
  ${ProjectDetail} {
    h2 {
      color: rgb(158, 61, 238);
    }
    a {
      text-decoration: none;
    }
  }

  ${ImgContainer} {
    a {
      color: rgb(158, 61, 238);
    }
  }

  img {
    box-shadow: -20px 20px rgb(158, 61, 238);
  }
`;

const Tecnologies = styled.span`
  margin-top: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #444041;
`;

const ProjectText = styled.p`
  width: 350px;
  text-align: center;
  margin-top: 20px;
  color: #474444;
  line-height: 30px;
  font-size: 1.2rem;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <MovixContainer>
        <ProjectDetail>
          <h2>Movix</h2>
          <ProjectText>
            This is a website designed to search for films and stay on top of
            news. The data were taken from the{" "}
            <a href="https://developers.themoviedb.org/3">TMDB api</a>.
          </ProjectText>
          <Tecnologies>ReactJS | SCSS | Redux</Tecnologies>
          <ProjectLinks>
            <a href="https://github.com/brunoascenc/movix-react/tree/master/movix">
              <AiFillGithub size={20} /> <p>Code</p>
            </a>
            <a href="https://movixapp.netlify.app/">
              <BiWorld size={20} /> <p>Website</p>
            </a>
          </ProjectLinks>
        </ProjectDetail>
        <ImgContainer>
          <img src={Movix} alt="movix-wpp" />
        </ImgContainer>
      </MovixContainer>

      <HzoneContainer>
        <ProjectDetail>
          <h2>Hzone</h2>
          <ProjectText>
            E-commerce website with data extracted from a json file and used in
            components with ContextAPI.
          </ProjectText>
          <Tecnologies>ReactJS | SCSS | ContextAPI</Tecnologies>
          <ProjectLinks>
            <a href="https://github.com/brunoascenc/hzone">
              <AiFillGithub size={20} /> <p>Code</p>
            </a>
            <a href="https://hzone.netlify.com/">
              <BiWorld size={20} /> <p>Website</p>
            </a>
          </ProjectLinks>
        </ProjectDetail>
        <ImgContainer>
          <img src={Hzone} alt="hzone-wpp" />
        </ImgContainer>
      </HzoneContainer>
    </ProjectsContainer>
  );
};

export default Projects;
