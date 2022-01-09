import React from 'react';
import timelineElements from './TimelineElement';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap,FaLaptopCode} from "react-icons/fa";
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Theme';
import "./BlogPage.css"
import astronauts from '../assets/images/read.png'



import BigTitle from '../subComponents/BigTitle'

const MainContainer =styled.div`
background-color: ${props => props.theme.body};
background-color: green;
margin-top:-1px;
z-index:0;
width: 100vw;



`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spacemans = styled.div`
position: absolute;
top: 15%;
left: 7%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
@media (max-width: 40em){
    top: 5%;
left: 3%;

    // right: 17%;
}
`

const BlogPage = () => {
  
    let workIconStyles = {background :'#06D6A0'};
    let schoolIconStyles = {background :'#F9C74F'};
    
    return (
        <ThemeProvider theme={DarkTheme}>
        <MainContainer>
      
     
            <BigTitle text="EDUCATION" top="10%" left="10%" color="white" />
        <VerticalTimeline >
            {
                timelineElements.map(element => {

                    let isWorkIcon = element.icon === "work";
                    // let ShowButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
                    return(
                        <VerticalTimelineElement
                  
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        icon={isWorkIcon ? <FaLaptopCode/> : <FaGraduationCap/> }
                      
                        >
                            
                            <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                         <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                    <p id='description'>{element.description}</p>
                   <p>{element.buttonText}</p>
                
                    </VerticalTimelineElement>
                    )
                })
            }
             <Spacemans>
            <img src={astronauts} alt="spaceman" />
        </Spacemans>   
        </VerticalTimeline>
        </MainContainer>
        </ThemeProvider>
    )
}

export default BlogPage
