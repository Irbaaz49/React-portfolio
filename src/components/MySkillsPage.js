import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Theme';
import { Design, Develope} from './AllSvgs';




const Box = styled.div`
// background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-around;
flex-wrap:wrap;
align-items: center;
z-index:10;


@media (max-width: 50em) {
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
    top:auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 70vh;
// z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

media (max-width: 30em) :nth-child(5) {
    margin-bottom: 4rem;
}
@media (max-width: 50em)  :nth-child(5) {
    margin-bottom: 5rem;
}
@media (max-width: 50em){
    width: 50vw;
    height: max-content;
}

@media (max-width: 60em) {
    height: 65vh;
}
@media (max-width: 50em){
    width: 60vw;
    height: max-content;
}

@media (max-width: 60em){
    height: 65vh;
        margin-bottom: 20px;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
fill:${props => props.theme.text};

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}

@media (max-width: 25em){
    font-size: calc(0.8em + 1vw);
}
@media (max-width: 30em) {
    font-size: calc(1em + 1vw);
}

@media (max-width: 50em){
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem;
}
@media (max-width: 60em){
    font-size: calc(0.8em + 1vw);
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
@media (max-width: 25em){
    font-size: calc(0.5em + 1vw);
}
@media (max-width: 30em){
    font-size: calc(0.7em + 1vw);
}

@media (max-width: 50em) {
    font-size: calc(0.8em + 0vw);
}
`
const TitleS =styled.h1`
position: relative;
    top: 10%;
    left: 10%;
    color: rgba(252,246,244,0.1);
    font-size: calc(5rem + 4vw);
    z-index: 0;
// background-color:black;
backdrop-filter:blur(4px);
@media only screen and (max-width: 50em) {

    font-size: calc(2rem + 5vw);
}
`


const MySkillsPage = () => {
   
    return (
        <ThemeProvider theme={DarkTheme}>
<TitleS>Skills</TitleS>
<Box>


            <Main>
<Title>
    <Design width={40} height={40} /> Designer
</Title>
<Description>
I love to create design which speaks, Keep it clean, minimal and simple.
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Web Design
    </li>
    {/* <li>
        Mobile Apps
    </li> */}
</ul>
</Description>
{/* <Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
    
</ul>
</Description> */}

            </Main>
          
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend Developer
</Title>
<Description>
I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Skills</strong>
<p>
Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Node js, Mongo db.
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VScode, Github, Codepen etc.
</p>
</Description>

            </Main>


        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage