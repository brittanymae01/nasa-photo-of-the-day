import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const ParaCustom = styled.p`
font-family: Georgia,sarif;
width: 70%;
margin: 0 auto;
`
const ImgCustom = styled.img`
width: 45%;
margin: 20px 0;
border: solid 5px black
padding: 25px;
background-color: #add8e6;
`
const CustomH2 = styled.h2`
margin 0 0 20px 0;
`
const CustomH3 = styled.h3`
margin 0 0 20px 0;
`

function ApodCard(props) {
    return (
        <div>
            <ImgCustom src={props.imgUrl} alt='astronomy picture' />
            <Buttons />
            <CustomH2>{props.title}</CustomH2>
            <CustomH3>{props.date}</CustomH3>
            <ParaCustom>{props.description}</ParaCustom>
        </div>
    )
}

export default ApodCard