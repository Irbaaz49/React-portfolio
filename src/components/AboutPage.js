import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Theme';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitle'
import astronaut from '../assets/images/spaceman.png'
import Particles from "react-tsparticles";

const Box = styled.div`
background-color: ${(props) => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
padding-bottom: 100px;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 7%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
@media (max-width: 40em){
    top: 10%;
    right: 17%;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
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
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 20em){
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
}
@media (max-width: 30em){
    width: 50vw;
    height: auto;
    backdrop-filter:  blur(4px);
    margin-top: 2rem;
}
@media (max-width: 40em){
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 46%;
    transform: translate(-50%, -50%);
}
`




const AboutPage = () => {
  
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>
          
{/* <ParticleComponent theme='light' /> */}
<Particles
     params={ParticleComponent}
    />
        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
<br /> <br/>
I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent and self learned frontend developer. I love to code and read books.
<br/> <br/>
I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>

        <BigTitle text="ABOUT" top="3%" left="9%"  />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage