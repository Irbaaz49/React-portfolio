import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: relative;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => `rgba(${props.theme.textRgba},0.1)`};
font-size: calc(3rem + 5vw);
z-index:0;
background-color:black;
@media only screen and (max-width: 50em) {

    font-size: calc(1rem + 3vw);
}
`


const BigTitlte = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
