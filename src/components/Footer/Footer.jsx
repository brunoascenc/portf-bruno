import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #2c2638;
  color: #d6d3db;
  height: 300px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  h2 {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 1.5rem;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .name{
      font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 10px;
    line-height: 29px;
  }

  div {
    display: flex;
    /* align-items: center; */
    /* margin-bottom: 5px; */
    font-size: 1.3rem;

    p{
        margin-left: 5px;
    }
  }
`;

const Copy = styled.div `
p{
    font-size: 1.5rem;
}


`

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <h2>Contact</h2>
        <p>
          <span className="name">Bruno Ascenção</span> <br /> São Paulo, SP
        </p>
        <div>
          <GrMail size={25} /> <p>brunoascencao1@outlook.com</p>
        </div>

        <div>
          <AiFillLinkedin size={25} /> <p>Linkedin</p>
        </div>
      </ContactInfo>
      <Copy>
          <p><AiFillGithub/> Website repository</p>
          <span>© copyright 2021 Bruno Ascenção</span>
      </Copy>
    </FooterContainer>
  );
};

export default Footer;
