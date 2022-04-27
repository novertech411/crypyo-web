import React from 'react'
import styled from 'styled-components';
import business from '../img/marketing.mp4';
import circle from '../img/circles.svg';

function mainArea() {
  
    return (
    <MainAreaStyled>
        <video src={business} muted playsInline autoPlay loop> </video>
        <img src= {circle} alt="alt" className="overlay" />
    </MainAreaStyled> 
    )

}

const MainAreaStyled = styled.div`

width: 100%;
height: 85vh;
position: relative;
overflow: hidden;
.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    right: -400px;
    top: -300px;
    
}

`;

export default mainArea;