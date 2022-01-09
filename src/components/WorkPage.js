import React, { useEffect, useRef } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Theme';
import {motion} from 'framer-motion';
import astronauts from '../assets/images/sship.png'

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitlte from '../subComponents/BigTitle';

const Box = styled.div`
background-color: ${props => props.theme.body};

height:850vh;
position: relative;
display: flex;
align-items: center;
z-index:0;

@media only screen and (max-width: 850px) and (min-width: 522px)  {
height: 850vh;


}
`

const Main = styled(motion.ul)`
position: fixed;
top: 15rem;
left:calc(250rem + 50vw);
height: 40vh;
display: flex;
color:white;
@media (max-width: 25em){
  top: 30%;  
  left: calc(250rem + 15vw);
}

@media (max-width: 40em){
  top: 30%;
    left: calc(260rem + 15vw);
}
@media (max-width: 40em) {
    top: 30%;
    left: calc(260rem + 15vw);
}
@media (max-width: 50em) {
  top: 30%;  
  left: calc(260rem + 15vw);
}
@media only screen and (max-width: 850px) and (min-width: 522px)  {
  left: calc(250rem + 300vw);

}

`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;

@media (max-width: 50em) {
    width: 20px;
    height: 20px;
  }


`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spacemanship = styled.div`
position: absolute;
top: 90%;
left: 40%;
width: 20vw;
transform: scaleY(-1);
filter: drop-shadow(0px 100px 56px  #5ebac9);
  animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
  
}
@media (max-width: 40em){
    top: 85%;
left: 22%;
img{
  width: 250%;
  height: auto;

}

    
}
`

// Framer-motion Configuration
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

 
    const ref = useRef(null);
    const yinyang = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset}px)`
      
         
          return (yinyang.current.style.transform =
            'rotate(' + -window.pageYOffset + 'deg)')
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])


    return (
        <ThemeProvider theme={DarkTheme}>
<Box>
<BigTitlte text="PROJECTS" top='-20%' left="5%" />
     


     <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
     <Spacemanship>
            <img src={astronauts} alt="spaceman" />
        </Spacemanship>   
<Rotate ref={yinyang}>
    <YinYang fill={DarkTheme.text} />
</Rotate>

        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage