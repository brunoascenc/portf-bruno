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
  position: absolute;
  bottom: 20px;
`;

const ImgContainer = styled.div`
  position: relative;
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
  flex-direction: row-reverse;
  margin-bottom: 100px;
  /* background: #ece8e8; */
  ${ProjectDetail} {
    h2 {
      color: #f1324c;
    }
  }

  ${ImgContainer} {
    /* background: #f1324c; */
    a {
      color: black;
    }
  }

  img {
    /* border: solid 1px #ac293a; */
    box-shadow: -1px 5px 10px 2px rgba(34, 33, 33, 0.2);
  }
`;

const MovixContainer = styled(HzoneContainer)`
  background: unset;
  flex-direction: unset;
  ${ProjectDetail} {
    h2 {
      color: rgb(158, 61, 238);
    }
    a {
      text-decoration: none;
    }
  }

  ${ImgContainer} {
    /* background: #0a0a0e; */
    a {
      color: rgb(158, 61, 238);
    }
  }

  img {
    /* border: solid 1px #0a0a0e; */
    box-shadow: -1px 5px 10px 2px rgba(34, 33, 33, 0.2);
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
        </ProjectDetail>
        <ImgContainer>
          <img src={Movix} alt="movix-wpp" />
          {/* <ProjectLinks>
            <a href="https://github.com/brunoascenc/movix-react/tree/master/movix">
              <AiFillGithub size={40} />
            </a>
            <a href="https://movixapp.netlify.app/">
              <BiWorld size={40} />
            </a>
          </ProjectLinks> */}
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
        </ProjectDetail>
        <ImgContainer>
          <img src={Hzone} alt="hzone-wpp" />
          {/* <ProjectLinks>
            <a href="https://github.com/brunoascenc/hzone">
              <AiFillGithub size={40} />
            </a>
            <a href="https://hzone.netlify.com/">
              <BiWorld size={40} />
            </a>
          </ProjectLinks> */}
        </ImgContainer>
      </HzoneContainer>
    </ProjectsContainer>
  );
};

export default Projects;
