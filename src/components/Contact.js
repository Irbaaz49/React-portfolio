import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import "./Contact.css";
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

import { useAlert } from "react-alert";

// import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from "../subComponents/BigTitle";
import astronaut from "../assets/images/a2.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
  border: none;

`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 17%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 150%;
    height: auto;
  }
  @media (max-width: 40em) {
    top: 3%;
    right: 43%;
  }
  @media (max-width: 40em) {
    img {
      width: 300%;
      height: auto;
    }
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 6px;
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  display : flex;
     flex-direction: column;
  @media (max-width: 20em) {
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  }
  @media (max-width: 30em) {
    width: 50vw;
    height: auto;
    backdrop-filter:blur(4px);

    margin-top: 2rem;
  }
  @media (max-width: 40em) {
    width: 65vw;
    height: 70vh;
    top: 45%;
    padding-right: 45px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Contact = () => {
  const alert = useAlert();
function sendEmail(e){
 e.preventDefault();
  emailjs.sendForm('service_fw0drbk','template_hkiihb7', e.target,"user_WCiVKtCvH8n7IfaWv83LN" ).then(res =>{
    alert.success("Message Sent Successfully")
  document.getElementById('name').value='';
  document.getElementById('mail').value='';
  document.getElementById('subject').value='';
  document.getElementById('message').value='';
  }).catch(err=> alert.show("Something went wrong"));
  
}
// function fun(){
//   document.getElementById('name').value='';
//   document.getElementById('mail').value='';
//   document.getElementById('subject').value='';
//   document.getElementById('message').value='';

//   }
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        {/* <ParticleComponent theme='dark' /> */}

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
       
          <form onSubmit={sendEmail} >
            <div className="fields">
              <div className="field name">
                <input type="text" name="name" placeholder="Name" id="name" required />
              </div>
              <div className="field email">
                <input type="email" name="user_email" placeholder="Email" id="mail" required />
              </div>
            </div>
            <div className="field">
              <input type="text" name="message" placeholder="Subject" id="subject" required />
            </div>
            <div className="field textarea">
              <textarea
              id="message"
                cols="30"
                rows="10"
                name="messgae"
                placeholder="Message.."
                required
              ></textarea>
            </div>
            <div className="button-area">
              <button type="submit" >Send message</button>
            </div>
          </form>
          

        
          <a href={"mailto:irbaazhussain49@gmail.com"} rel="noopener noreferrer" style={{position:"relative", left:"70px", top:"20px", textDecoration:"none", color:"white"}} target="_blank">
            irbaazhussain49@gmail.com
          </a>
          <a href="tel:+917660963597" target="_blank" rel="noopener noreferrer" style={{position:"relative", left:"114px",top:"20px",textDecoration:"none", color:"white"}}>
            7660963597
          </a>
     <a href="https://drive.google.com/file/d/1vekZY-gy8zLwDEPRbCVcMbj4w7LzXtcT/preview" rel="noopener noreferrer" target="_blank" style={{position:"relative", left:"114px",top:"20px",textDecoration:"none", color:"white"}}>Resume</a>
        </Main>

        <BigTitle text="HIRE ME" top="3%" left="9%" />
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
