import React from 'react';
import styled, { css } from 'styled-components'
import myHeaderImg from '../../assets/Headerimage.JPG'


const HTML = styled.html`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;

const BODY = styled.body`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;

const mobileMediaQuery = css`
@media (max-width: 768px) {
  display: none;
  }
  
}
`

const H1 = styled.div`
display: flex;
width: 50;
  flex-shrink: 0;
   
  font-size: 6em;
  padding: 20px;
  margin-top: -19px;
  color:black;
  margin-bottom: 67px;
  ${mobileMediaQuery};
`;


const mobileMediaBox0 = css`
@media (max-width: 768px) {
width:100%;
}
`
const Box0 = styled.div`
display: flex;
flex-direction: row;
word-wrap: break-word;
padding-right: 0;
padding-left: 0;
width:70%;
  ${mobileMediaBox0};
`;

const mobileMediaBox1 = css`
padding: 10px; 
margin-top: -77px; 
`;

const Box1 = styled.div`
  background-color: blue;
  color: white;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  font-size: 2.2em;
  margin-bottom: -5px;
${mobileMediaBox1};
 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; 
`;

const mobileMediaBox2 = css`
@media (max-width: 768px) {
max-width: 25%;
white-space: nowrap;
font-size: 12px;
margin-left: auto;
margin-right: 0;
}
`
const Box2 = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 25%;
  background-color: gray;
  color: white;
  outline: solid 1px white;
  ${mobileMediaBox2};
`;
const mobileImage = css`
@media (max-width: 768px){
  display:flex;
  max-width: 100%;
  max-height: 100%;
  padding-bottom: 4.25rem;
  margin:0;
}
`
const Image= styled.img `
margin-left: 47.5%;
  display: block;
  height: 120px;
background-repeat: no-repeat;
background-size: contain;
${mobileImage};
`



function Header() {
  return(
    <HTML>
      <BODY>
    <div>
      <Container>
      <Box0>
     <H1>NBA.com/Stats</H1>
     
     <Image src = {myHeaderImg}  />
     
     </Box0>
    
    
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
</BODY>
</HTML>
  );
}

export default Header

