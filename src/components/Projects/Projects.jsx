import React from "react";
import Movix from "../../assets/movix-dktp.png";
import Hzone from "../../assets/hzone-dktp.png";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: bold;
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${Title} {
    align-self: center;
    color: #1a1818;
    letter-spacing: 1px;
    border-bottom: solid 1px #524e4e;
    margin-bottom: 50px;
  }

  img {
    max-width: 100%;
  }
`;

const ProjectDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HzoneContainer = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: row-reverse;
  background: #ece8e8;
  ${ProjectDetail} {
    ${Title} {
      color: #f1324c;
    }
  }
`;

const MovixContainer = styled(HzoneContainer)`
  background: unset;
  flex-direction: unset;
  ${ProjectDetail} {
    ${Title} {
      color: rgb(158, 61, 238);
    }
    a {
      text-decoration: none;
    }
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
  line-height: 25px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <MovixContainer>
        <ProjectDetail>
          <Title>Movix</Title>
          <ProjectText>
            This is a website designed to search for films and stay on top of
            news. The data were taken from the{" "}
            <a href="https://developers.themoviedb.org/3">TMDB api</a>.
          </ProjectText>
          <Tecnologies>ReactJS | SCSS | Redux</Tecnologies>
        </ProjectDetail>
        <img src={Movix} alt="movix-wpp" />
      </MovixContainer>

      <HzoneContainer>
        <ProjectDetail>
          <Title>Hzone</Title>
          <ProjectText>
            E-commerce website with data extracted from a json file and used in
            components with ContextAPI.
          </ProjectText>
          <Tecnologies>ReactJS | SCSS | ContextAPI</Tecnologies>
        </ProjectDetail>
        <img src={Hzone} alt="hzone-wpp" />
      </HzoneContainer>

      {/* <MovixContainer>
        <ProjectDetail>
          <Title>Movix</Title>
          <ProjectText>
            This is a website designed to search for films and stay on top of
            news. The data were taken from the{" "}
            <a href="https://developers.themoviedb.org/3">TMDB api</a>.
          </ProjectText>
          <Tecnologies>ReactJS | SCSS | Redux</Tecnologies>
        </ProjectDetail>
        <img src={Movix} alt="movix-wpp" />
      </MovixContainer> */}
    </ProjectsContainer>
  );
};

export default Projects;
