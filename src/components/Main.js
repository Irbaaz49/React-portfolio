import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
// import LogoComponent from '../subComponents/LogoComponent'
import { YinYang } from './AllSvgs';
import Intro from './Intro'
// import "./Main.css";
import SocialIcons from "../subComponents/SocialIcons"



const MainContainer =styled.div`
background: ${props =>props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;
position : relative;
h2,h3,h4,h5,h6 {
    font-weight:500;
}
z-index:100;
`
const Container = styled.div`
padding:2rem;
`
const rotate = keyframes`
from{
    transform: rotate(0);

}
to{
    transform: rotate(360deg);
}

`


const Center = styled.button`
position: absolute;
top:${props => props.click ? '90%' : '50%'};
left :${props => props.click ? '50%' : '50%'};
transform : translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
height:${props => props.click ? '80px' : '150px'};
width:${props => props.click ? '80px' : '150px'};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition : all 1s ease;
&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}


&>:last-child{
display:${props => props.click ? 'none' : 'inline-block'};

    padding-top:1rem;
}

// @media only screen and (max-width: 50em) {
    
//     width: 100px;
//     height: 100px;
// }



`

const DarkDiv = styled.div`
position: absolute;
top: 0px;
bottom: 0;
right: 50%;
width: ${props => props.click ? '100%' : '0%'};
background-color: #000;
height: ${props => props.click ? '100%' : '50%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
@media (max-width: 50em){
    right: 0px;
   
    height: 50%;
    transition: width 0.5s ease 0s,height 1s ease 0.5s;
}
@media (max-width: 50em) {
    right: 0px;
   
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
   
}

`




const Main = () => {
    const [click, setClick] = useState(false);
const handleClick = ()=> setClick(!click)


    return (
        <MainContainer>
            <DarkDiv click={click}/>
          <Container>
           {/* <LogoComponent theme={click ? 'dark' : 'light'}/> */}
           < SocialIcons theme={click ? "dark" : "light"}/>
<Center click={click}>
 <YinYang className="Main" width={click ? 120 : 200} onClick={()=> handleClick()} height={click ? 120 : 200} fill='black' />
    <span style={{color:"black"}}>Click here ⬆ ⬆</span>
</Center>

          </Container>
          {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
