import React from "react";
import {Div,Box2,TextFive,TextSix,TextSeven,TextEight} from "../Styled-List/Styled-Footer";
import text from "../HeaderData/text.jsx";

const Footer =()=> {
return(
<Div>
    <Box2>
    <TextFive>{text[5].name}</TextFive>
        <TextSix>{text[6].name}</TextSix>
    </Box2>
    <Box2>
        <TextSeven>{text[7].name}</TextSeven>
        <TextEight>{text[8].name}</TextEight>
      </Box2>
      
</Div>
);
}

export default Footer