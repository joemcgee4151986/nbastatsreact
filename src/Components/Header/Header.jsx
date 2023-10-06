import React from 'react';
import styled from 'styled-components'
import myHeaderImg from '../../assets/Headerimage.JPG'
import { device } from '../Devices/Devices.jsx'


const H1 = styled.h1`
  margin-top: 0%;
  font-size: 9vw;
  font-style:Helvetica Condensed;
  color: gray;
  @media ${device.mobileM} {
    font-size:4vw;
    margin-top: -1%;
   }
`;

 
  const Box0 = styled.div`
  display: flex;
  flex-direction: column; 
  
    max-width: 100%;
    height: 5vh;
    padding: 20px;
    margin-bottom: 2em;
    background-color: #0039a6;
    font-size: 3vh;
    color: white;
    font: Helvetica;
 background-color: white;

 @media ${device.mobileS} {
  max-width: 100%;
  white-space: nowrap;
 }

 
  `;

const Box1 = styled.div`
table-layout: fixed;
width: 100%;
font-size: 2em;
white-space: nowrap;
  background-color: #0039a6;
  font-size: 2.5vh;
  color: white;
  font: Helvetica;
  @media ${device.mobileL} {
    max-width: 100%;
    white-space: nowrap;
  
   }
`
const Box2 = styled.div`
display: inline-flex;
position: relative;
min-width: 25%;
font-size: 1.5em;
text-align:center;
color: white;
background-color:GREY;
outline: solid 1px white;
font: Helvetica;
@media ${device.mobileS} {
  min-width: 25%;
  white-space: nowrap;
  font-size: 12px;
 }
 }

`
const Box3 = styled.div`
display: inline-flex;
position: relative;
min-width: 25%;
font-size: 1.5em;
text-align:center;
color: white;
background-color:GREY;
outline: solid 1px white;
font: Helvetica;
@media (max-width: 480px) {
  table-layout: fixed;
  width: 25%;
  font-size: 1em;
  white-space: nowrap;
  flex-direction: row;
 }
`



const Image = styled.img`
display: flex;
flex-direction: row-reverse;
position: relative;
margin-left: auto;
margin-right: -18px;
margin-top: -145px;
padding: 20px;
width: 30%;
@media ${device.mobileM} {
  max-width: 375px;
  white-space: nowrap;
 }
`

function Header() {
  return(
    <div>
     <Box0><H1>NBA.com/Stats</H1></Box0>
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

