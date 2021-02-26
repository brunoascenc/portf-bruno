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
    height: 360px;

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
        /* align-self: center; */
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .movix{
          color: rgb(158, 61, 238);
          font-weight: bold;
          letter-spacing: 1px;
          /* border-bottom: solid 1px rgb(158, 61, 238); */
        }

        .hzone{
          color: #f1324c;
          font-weight: bold;
        }

        p{
          width: 350px;
          text-align: center;
          margin-top: 20px;
          color: #474444;
          line-height: 25px;
        }

        a{
          text-decoration: none;
        }

        .tecnologies{
          margin-top: 25px;
          font-weight: bold;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #444041;
        }
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
        <h1 className="movix">Movix</h1>
        <p>This is a website designed to search for films and stay on top of news. The data were taken from the <a href="https://developers.themoviedb.org/3">TMDB api</a>.</p>
        <span className="tecnologies">ReactJS | SCSS | Redux</span>
        </div>
        <img src={Movix} alt="movix-wpp" />
      </div>

      <div>
        <div className="project-detail">
          <h1 className="hzone">Hzone</h1>
          <p>E-commerce website with data extracted from a json file and used in components with ContextAPI.</p>
          <span className="tecnologies">ReactJS | SCSS | ContextAPI</span>
        </div>
        <img src={Hzone} alt="hzone-wpp" />
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
