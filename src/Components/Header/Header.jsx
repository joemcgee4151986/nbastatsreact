import React from 'react';
import myHeaderImg from '../../assets/Headerimage.JPG'
import { Div, H1, H4, Text,TextTwo, Box0, Box1, Container, Box2,Image } from '../Styled-List/Styled-Header.jsx'

const Header = () =>{
  const text = [{name :  'PPG'},
  { name: 'Points Per Game' },
  {name: 'League Leaders'},
]
  return(
    <Div>
      <Container>
      <Box0>
       
     <H1>NBA.com/Stats</H1>
    
     <Image src = {myHeaderImg}  />
     
     </Box0>
    
    
     <Box1>
      {text[2].name}
     </Box1>
     </Container>
     <Box2>
    
      <Text>{text[0].name}</Text>
      <TextTwo>{text[1].name}</TextTwo>
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

