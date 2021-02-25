import React from "react";
import Movix from "../../assets/movix-dktp.png";
import Hzone from "../../assets/hzone-dktp.png";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  /* height: 100vh; */

  > div {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template: 'lol xd
                          xd lol' */

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 300px;

    &:first-child {
      background: #ece8e8;
      grid-area: lol;
      /* margin-bottom: 100px; */
    }

    &:last-child {
      flex-direction: row-reverse;
      grid-area: xd;
    }

    
    .project-detail{
        align-self: center;
        display: flex;
        width: 100%;
        justify-content: center;
      }

    img{
      max-width: 100%;
   }

  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <div>
        <div className="project-detail">
        <h1>Movix</h1>
        </div>
        <img src={Movix} alt="movix-wpp" />
      </div>

      <div>
        <div className="project-detail">
          <h1>Hzone</h1>
        </div>
        <img src={Hzone} alt="hzone-wpp" />
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
