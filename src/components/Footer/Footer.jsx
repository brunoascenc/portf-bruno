import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";

const FooterTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: #eee2e2;
`;

const FooterContainer = styled.footer`
  position: relative;
  background: #36325c;
  color: #c7bfd4;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-left: 5%;
  padding-right: 5%;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  .name {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    line-height: 29px;
  }

  div {
    display: flex;
    font-size: 1.3rem;
    margin: 10px;
    margin-left: 0;

    a {
      margin-left: 5px;
      color: #c7bfd4;
    }
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
      font-size: 1.8rem;
      margin-left: 5px;
    }
  }

  span {
    font-size: 0.8rem;
  }
`;

const BuiltBy = styled.span`
  background: #474375;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: #d6cdcd;
  a {
    color: #d6cdcd;
    border-bottom: dotted 1px #d6cdcd;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <FooterTitle>Contact Info</FooterTitle>
        <p>
          <span className="name">Bruno Ascenção</span> <br /> São Paulo, SP
        </p>
        <div>
          <GrMail size={25} /> <a href = "mailto: brunoascencao1@outlook.com">brunoascencao1@outlook.com</a>
        </div>

        <div>
          <AiFillLinkedin size={25} /> <a href="https://www.linkedin.com/in/bruno-ascen%C3%A7%C3%A3o-5bb27b16a/">Linkedin</a>
        </div>
      </ContactInfo>
      <Copy>
        <div>
          <AiFillGithub size={45} /> <p>Website repository</p>
        </div>
        <span>© copyright 2021 Bruno Ascenção</span>
      </Copy>
      <BuiltBy>
        Built by <a href="https://github.com/brunoascenc">Bruno Ascenção</a>
      </BuiltBy>
    </FooterContainer>
  );
};

export default Footer;
