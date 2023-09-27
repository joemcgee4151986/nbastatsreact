import React from 'react';
import styled from 'styled-components'
import myHeaderImg from '../../assets/Headerimage.JPG'



const H1 = styled.h1`
  margin-top: -10px;
  font-size: 80px;
  font-style:Helvetica Condensed;
  color: gray;
`

 
  const Box0 = styled.div`
  display: flex;
flex-direction: column;
max-width: 100%;
line-height: 115%;
 
  padding: 35px;
 background-color: white;

  

 
  `

const Box1 = styled.div`
display: flex;
flex-direction: column; 

  max-width: 100%;
  height: 5vh;
  padding: 20px;
  margin-top: -15px;
  background-color: #0039a6;
  font-size: 2em;
  color: white;
  font: Helvetica;
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

`
const Box3 = styled.div`
display: inline-flex;
margin: 0 auto;
min-width: 25%;
font-size: 1.5em;
text-align: center;
color: white;
background-color:GREY;
outline: solid 1px white;
font: Helvetica;

`


const Image = styled.img`
display: flex;
flex-direction: row-reverse;
position: relative;
margin-left: auto;
margin-right: -18px;
margin-top: -155px;
padding: 20px;
width: 30%;
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
     <Box3>
      Points Per Game
     </Box3>
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

