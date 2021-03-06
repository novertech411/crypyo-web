import React from 'react'
import styled from 'styled-components';
import business from '../img/marketing.mp4';
import circle from '../img/circles.svg';
import { InnerLayout } from '../Layout';
import MainContent from './MainContent';


function mainArea() {
  
    return (
    <MainAreaStyled>
        <video src={business} muted playsInline autoPlay loop> </video>
        <img src= {circle} alt="alt" className="overlay" />
    <InnerLayout>
      <MainContent />
    </InnerLayout>
    </MainAreaStyled> 
    )

} 

const MainAreaStyled = styled.div`

width: 100%;
height: 100vh;
position: relative;
overflow: hidden;
.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    right: -250px;
    top: -200px;
    
}

video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity:0.7;
}

`;

export default mainArea;