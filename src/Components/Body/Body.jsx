import React from 'react';
import styled from 'styled-components'
import player1 from '../../assets/Hardenpic.jpeg'

const Text = styled.p`
margin-top: 0;
`
const Container = styled.div`
display: flex;
  flex-wrap: wrap; 
`
const Box3 = styled.div`
display: inline-flex;
position: relative;
min-width: 25%;
min-height:165px;
font-size: 1.5em;
text-align:center;
color: white;
background-color:GREY;
outline: solid 1px white;
font: Helvetica;
`
const Box4 = styled.div`

align-items: flex-start;
position: relative;
background-color: white;
color: gray;
flex-direction: row; 
outline: solid 1px white;
width: 2%; 
height:10%;

padding-bottom: 3%;

justify-content: center;



`
const Box5 = styled.div`
display: inline-flex;
position: relative;
background-color: gray;
flex-direction: row; 
outline: solid 1px white;
width: 5%; 
height:10%;
padding-top: 5%;
align-items: center;
justify-content: center;
background-image:  url(${player1});
background-size: cover;
`
const Box6 = styled.div`
position: relative;
background-color: gray;
flex-direction: row; 
outline: solid 1px white;
width: 15%; 
height:10px;
padding-top: 3%;
align-items: center;
justify-content: center;

`
const Box7 = styled.div`
display:flex;
align-items: flex-start;
position: relative;
background-color: white;
color: gray;
flex-direction: column; 
outline: solid 1px white;
width: 2%; 
height:10%;

padding-bottom: 3%;

justify-content: center;
`



const H1 = styled.h1`
  margin-top: -10px;
  font-size: 80px;
  font-style:Helvetica Condensed;
  color: gray;
`

function BodyPage(){
    return(
    <div>
        
  
     <Box3></Box3> 
     <Box3></Box3> 
     <Box3></Box3> 
     <Box3></Box3> 
     <Container>
     <Box4><Text>2</Text></Box4>
     <Box5></Box5>
     <Box6></Box6>
     <Box4><Text>6</Text></Box4>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
     <Container>
     <Box7><Text>3</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box7><Text>7</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
     <Container>
     <Box7><Text>4</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box7><Text>8</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
     <Container>
     <Box7><Text>5</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box7><Text>9</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
    
     </div>
    )
}
export default BodyPage