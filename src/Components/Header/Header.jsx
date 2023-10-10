import React from 'react';
import styled from 'styled-components'
import myHeaderImg from '../../assets/Headerimage.JPG'


const device = {
  mobileS: "320px",
  mobileM: "480px",
  mobileL: "640px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
};


const H1 = styled.div`
  display: flex;
  flex-shrink: 0;
  position: static;
  font-size: 6em;
  padding: 20px;

  @media ${device.mobileL} {
    padding-top: 10px;
  }
`;

const Box1 = styled.div`
  background-color: blue;
  color: white;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 200%;
`;

const Box2 = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 25%;
  background-color: gray;
  color: white;
  outline: solid 1px white;

  @media ${device.mobileL} {
    max-width: 25%;
    white-space: nowrap;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
  }
`;

const Image = styled.img`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  margin-left: auto;
  margin-right: -18px;
  margin-top: -155px;
  padding: 20px;
  width: 30%;

  @media ${device.mobileS} {
    max-width: 375px;
    white-space: nowrap;
  }
`;

function Header() {
  return(
    <div>
      
     <H1>NBA.com/Stats</H1>
   
     <Image src={myHeaderImg} />
     <Box1>
      League Leaders
     </Box1>
     <Box2>
    
      Points Per Game
     
     </Box2>
     <Box2>
      Points Per Game
     </Box2>
     <Box2>
      Assists Per Game
     </Box2>
     <Box2>
      Steals Per Game
     </Box2>
  
  
</div>
  );
}

export default Header

