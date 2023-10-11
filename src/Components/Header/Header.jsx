import React from 'react';
import styled, { css } from 'styled-components'
import myHeaderImg from '../../assets/Headerimage.JPG'
import { device } from '../Devices/Devices.jsx'

const mobileMediaQuery = css`
@media (max-width: 768px) {
  
 
  
}
`

const H1 = styled.div`
display: flex;
  flex-shrink: 0;
  position: relative; 
  font-size: 6em;
  padding: 20px;
  margin-top: 20px;
  color:black;
  margin-bottom: 42px;
  ${mobileMediaQuery};
`;

const mobileMediaBox1 = css`
padding: 10px; 
    
    margin-top: -77px; 

`;

const mobileMediaBox0 = css`
  font-size: 16px;
`
const Box0 = styled.div`

background-color:yellow;
word-wrap: break-word;
padding-right: 0;
padding-left: 0;
display: flex;
flex-direction: column;
align-items: left;
font-size: 200%;
max-width:60%;
  ${mobileMediaBox0};
`;

const Box1 = styled.div`
  background-color: blue;
  color: white;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  font-size: 2em;
  margin-bottom: -5px;
${mobileMediaBox1};
 
`;
const HeaderWrapper = styled.div`
  margin-bottom: 50px; 
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; 
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
  position: absolute;
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
      <Container>
      <Box0>
     <H1>NBA.com/Stats</H1>
     </Box0>
     {/*<Image src={myHeaderImg} />*/}
     <Box1>
      League Leaders
     </Box1>
     </Container>
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

