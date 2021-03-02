import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
  height: 45vh;
`;

const Title = styled.h1`
  color: #494646;
  letter-spacing: 1px;
  border-bottom: solid 1px #524e4e;
  font-weight: 100;
  font-size: 2rem;
`;

const AboutTxt = styled.p`
  color: #474444;
  margin-top: 45px;
  text-align: center;
  width: 800px;
  line-height: 35px;
  font-size: 1.1rem;
  letter-spacing: 1px;
`;

const About = () => {
  return (
    <AboutSection>
      <Title>About</Title>
      <AboutTxt>
        Front-end developer with solid knowledge in HTML5, CSS3, JavaScript and
        ReactJS. I developed an enrollment portal for the University Center of
        Faculdades Metropolitanas Unidas, and I also worked as a designer
        creating flyers and business cards for local establishments in my
        region. Passionate about front-end development and web design.
      </AboutTxt>
    </AboutSection>
  );
};

export default About;
