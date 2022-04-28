import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

function MainContent() {
  return (
    <MainContentstyled>
        <Navigation/>
    </MainContentstyled>
  )
}

const MainContentstyled = styled.div` 
position: absolute;
top:0;
left: 50%;
transform: translateX(-50%);
width: 80%;
height: 100%;
background-color:red;
 
` 

export default MainContent  