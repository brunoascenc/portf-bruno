import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 100vh;
  > div {
    height: 200px;

    &:first-child,
    :last-child {
      background: #f3efef;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <div>
        <h1>Project1</h1>
      </div>

      <div>
        <h1>Project2</h1>
      </div>

      <div>
        <h1>Project3</h1>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
