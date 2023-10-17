import React from 'react';
import myHeaderImg from '../../assets/Headerimage.JPG'
import { Div, H1, H4, Box0, Box1, Container, Box2,Image } from '../Styled-List/Styled-List.jsx'

function Header() {
  return(
    <Div>
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
    
      <H4>Points Per Game</H4>
     </Box2>
     <Box2>
     <H4>Rebounds Per Game</H4>
     </Box2>
     <Box2>
     <H4>Assists Per Game</H4>
     </Box2>
     <Box2>
     <H4>Steals Per Game</H4>
     </Box2>
     </Div>
  );
}

export default Header

