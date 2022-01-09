import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { Call, Github, LinkIN, Gmail, Insta } from '../components/AllSvgs'
import {DarkTheme} from '../components/Theme'
 

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: absolute;
bottom: 0px;
right: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

@media (max-width: 50em) {
bottom: -105px;
right: 1.1rem;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <a style={{color:'inherit'}} rel="noopener noreferrer" target="_blank"   href={"https://github.com/Irbaaz49"}>
                    <Github width={20} height={20} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
           <a href="mailto:irbaazhussain49@gmail.com" rel="noopener noreferrer" style={{color:'inherit'}}  target="_blank" >
                    <Gmail width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <a href="tel:+917660963597" rel="noopener noreferrer" style={{color:'inherit'}}  target="_blank"  >
                    <Call width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <a style={{color:'inherit'}} rel="noopener noreferrer" target="_blank"  href={"https://www.linkedin.com/in/irbaaz-hussain-8815a1132"} >
                    <LinkIN width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </a>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <a style={{color:'inherit'}}  target="_blank" rel="noopener noreferrer"   href={"https://www.instagram.com/_irbaaz_hussain/"}>
                    <Insta width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </a>
            </motion.div>

            <Line color={props.theme}

initial={
    {
        height:0
    }
}
animate={{
    height: '8rem'
}}
transition={{
    type:'spring', duration:1, delay:0.8
}}
            />
        </Icons>
    )
}

export default SocialIcons