import React from "react";
import {Div,Box2,TextSix,TextEight} from "../Styled-List/Styled-Footer";
import text from "../HeaderData/text.jsx";

const Footer =()=> {
return(
<Div>
    <Box2>
   
        <TextSix>{text[6].name}</TextSix>
    </Box2>
    <Box2>
        
        <TextEight>{text[8].name}</TextEight>
      </Box2>
      
</Div>
);
}

export default Footer