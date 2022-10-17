import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import astronaut from "../assets/images/hi.png";
import Particles from "react-tsparticles";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 7%;
  width: 40vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 40em) {
    top: 10%;
    right: 17%;
  }
`;
const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
height: 80vh;
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
  
  
  &:before{
      content: '<p>';
      position: absolute;
      top: 10px;
      left: 15px;
  font-style: normal;

    //   margin-top:5px;
    //   margin-left: -1px;
    //   height: 90%;
    //   z-index: -1;    
    //   border-left: 1px dashed #ccc;
    } 
    &:after{
        content:'</p>';
  font-style: normal;

        position: absolute;
        bottom: 10px;
        left: 15px;
        // margin-left: -1px;
        // height: 90%;
    }
    
    
    @media (max-width: 20em) {
        padding: 1rem;
        font-size: calc(0.5rem + 1vw);
    }
    @media (max-width: 30em) {
        width: 50vw;
        height: auto;
        backdrop-filter: blur(4px);
        margin-top: 2rem;
    }
    @media (max-width: 40em) {
        width: 60vw;
        height: 50vh;
        top: 50%;
        left: 46%;
        transform: translate(-50%, -50%);
    }
    `;
    const Secmain= styled.div`
    // position:relative;
    &:before{
        content: '';
        position: absolute;
        top: 38px;
        // bottom:25px
        left: 15px;
        margin-top:5px;
        margin-left: -1px;
        height: 85%;
        z-index: -1;    
        border-left: 1px dashed #ccc;
      } 
      @media (max-width: 30em) {
        &:before{
            top:25px;

        }
    }
    `;
    
    const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        {/* <ParticleComponent theme='light' /> */}
        <Particles params={ParticleComponent} />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
            <Secmain>
          I work as a front-end developer in India. I enjoy creating simple yet
          beautiful websites with excellent user experience.
          <br /> <br />
          I'm curious about the entire front-end stack. Like exploring new ideas
          and creating amazing creations. I enjoy coding and reading.
          <br /> <br />
          I believe everything is an Art when you put your consciousness in it.
          <br /> <br />
          You can connect with me via social links.
          </Secmain>
        </Main>

        <BigTitle text="ABOUT" top="3%" left="9%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
