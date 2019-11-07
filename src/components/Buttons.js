import React from 'react'
import styled from 'styled-components'

const CustomButton = styled.button`
cursor: pointer;
 background: transparent;
 font-size: 16px;
 border-radius: 3px;
 color: black;
 border: 2px solid #5EA9C2;
 margin: 0 1em;
 padding: 0.25em 1em;
 transition: 0.5s all ease-out;
 width: 150px;
 margin: 20px;

 &:hover {
   background-color: #5EA9C2;
   color: white;
 }
`

function Buttons() {
    return (
        <div>
            <CustomButton>Previous Day</CustomButton>
            <CustomButton>Next Day</CustomButton>
        </div>
    )
}
export default Buttons