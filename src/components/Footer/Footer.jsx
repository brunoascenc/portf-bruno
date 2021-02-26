import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";

const FooterContainer = styled.footer `
background: #36325c;
height: 300px;
display: flex;
align-items: center;
`

const ContactInfo = styled.div `

display: flex;
flex-direction: column;
color: #f0e5e5;
padding-left: 5%;
padding-right: 5%;
h2{
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 2.3rem;
}

p{
    font-size: 1.2rem;
    margin-bottom: 10px;
}

span{
    /* display: flex;
    align-items: center; */
}

`

const Footer = () => {
    return (
        <FooterContainer>
            <ContactInfo>
                <h2>Contact Info</h2>
                <p>Bruno Ascenção <br/> São Paulo, SP</p>
                <span><GrMail/> brunoascencao1@outlook.com</span>
                <span><AiFillLinkedin/> Linkedin</span>

            </ContactInfo>
            
        </FooterContainer>
    )
}

export default Footer
