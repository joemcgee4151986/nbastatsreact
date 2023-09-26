import React from 'react';
import styled from 'styled-components'
import myHeaderImg from '../../assets/Headerimage.JPG'



const H1 = styled.h1`
display:flex;
  flex-direction:row;
  font-size: 40px;
`
const Box1 = styled.div`
display: flex;
flex-direction: column; 
  max-width: 100%;
  height: 5vh;
  padding: 20px;
  margin-top: -20px;
  background-color: #0039a6;
  font-size: 1.5em;
  color: white;
  font: Helvetica;
`
const Box2 = styled.div`
display: inline-flex;
flex-direction: column;
min-width: 24.89%;
font-size: 1.5em;
text-align:center;
color: white;
background-color:GREY;
border: solid white 1px;
font: Helvetica;

`


const Image = styled.img`
display: flex;
flex-direction: row-reverse;
position: relative;
max-width:50%;
margin-left: auto;
margin-right: -18px;
margin-top: -120px;
padding: 20px;
`

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

