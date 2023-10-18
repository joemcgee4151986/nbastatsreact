import React from 'react';
import {Container, Text, Box3, Box3a, Box3b, Box3c,Box4, Box5,Box6, Box7,Box8, H1} from '../Styled-List/Styled-Body.jsx'


let counter = 1
function BodyPage(){
    return(
      
    <div>
        
  
     <Box3></Box3> 
     <Box3a></Box3a> 
     <Box3b></Box3b> 
     <Box3c></Box3c> 
     <Container>
     <Box4><Text>{counter + 1}</Text></Box4>
     <Box5></Box5>
     <Box6></Box6>
     <Box8></Box8>
     <Box4><Text>{counter + 5}</Text></Box4>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
     <Container>
     <Box7><Text>{counter + 2}</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box8></Box8>
     <Box7><Text>{counter + 6}</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
     <Container>
     <Box7><Text>{counter + 3}</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box8></Box8>
     <Box7><Text>{counter + 7}</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     </Container>
     <Container>
     <Box7><Text>{counter + 4}</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box8></Box8>
     <Box7><Text>{counter + 8}</Text></Box7>
     <Box5></Box5>
     <Box6></Box6>
     <Box8></Box8>
     </Container>
    
     </div>
    )
}
export default BodyPage