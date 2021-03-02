import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import styled from "styled-components";

const Title = styled.h1`
  color: #494646;
  letter-spacing: 1px;
  border-bottom: solid 1px #524e4e;
  font-weight: 100;
  font-size: 2rem;
`;

const SkillSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ece8e8;
`;

const SkillsIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  margin-top: 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f3f3;
    border-radius: 8px;
    padding: 25px 50px 25px 50px;
    box-shadow: -1px 5px 10px 1px rgba(71, 69, 69, 0.2);

    p{
        margin-top: 20px;
        color: #353232;
    }
  }
`;

const Skills = () => {
  return (
    <SkillSection>
      <Title>Skills</Title>
      <SkillsIcons>
        <div>
          <AiFillHtml5 color="#302c2c" size={100} />
          <p>Html5</p>
        </div>
        <div>
          <IoLogoCss3 size={100} />
          <p>Css3</p>
        </div>
        <div>
          <IoLogoJavascript size={100} />
          <p>JavaScript</p>
        </div>
        <div>
          <GrReactjs size={100} />
          <p>ReactJS</p>
        </div>
        <div>
          <BsFillBootstrapFill size={100} />
          <p>Bootstrap</p>
        </div>
        <div>
          <IoLogoSass size={100} />
          <p>Sass</p>
        </div>

        <div>
          <AiFillGithub size={100} />
          <p>Git</p>
        </div>

        <div>
          <FiFigma size={100} />
          <p>Figma</p>
        </div>
      </SkillsIcons>
    </SkillSection>
  );
};

export default Skills;
