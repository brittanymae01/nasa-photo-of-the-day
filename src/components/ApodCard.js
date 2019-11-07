import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const ParaCustom = styled.p`
font-family: Georgia,sarif;
width: 50%;
margin: 0 auto;
`
const ImgCustom = styled.img`
width: 45%;
margin: 20px 0;
border: solid 5px black
padding: 25px;
background-color: #add8e6;
`


function ApodCard(props) {
    return (
        <div>
            <ImgCustom src={props.imgUrl} alt='astronomy picture' />
            <Buttons />
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <ParaCustom>{props.description}</ParaCustom>
        </div>
    )
}

export default ApodCard