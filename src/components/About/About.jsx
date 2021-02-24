import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  > p {
    margin-top: 45px;
    text-align: center;
    width: 800px;
    line-height: 35px;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h1>About</h1>
      <p>
        Front-end developer with solid knowledge in HTML5, CSS3, JavaScript and
        ReactJS. I developed an enrollment portal for the University Center of
        Faculdades Metropolitanas Unidas, and I also worked as a designer
        creating flyers and business cards for local establishments in my
        region. Passionate about front-end development and web design.
      </p>
    </AboutSection>
  );
};

export default About;
