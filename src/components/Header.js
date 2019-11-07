import React from 'react'
import styled from 'styled-components'

const CustomHeader = styled.h1`
font-size: 5.5rem;
padding: 20px;
`

function Header() {
    return (
        <div>
            <CustomHeader>Nasa Photo of the Day !</CustomHeader>
        </div>
    )
}

export default Header