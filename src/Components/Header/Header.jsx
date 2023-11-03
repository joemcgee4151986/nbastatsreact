import React from "react";
import text from "../HeaderData/text.jsx";
import myHeaderImg from "../../assets/Headerimage.JPG";
import {
  Div,
  TextNBA,
  Text,
  TextTwo,
  TextThree,
  TextFour,
  TextFive,
  TextSix,
  TextSeven,
  TextEight,
  Box0,
  Box1,
  Container,
  Box2,
  Image,
} from "../Styled-List/Styled-Header.jsx";

const Header = () => {
  return (
    <Div>
      <Container>
        <Box0>
          <TextNBA>{text[9].name}</TextNBA>
          <Image src={myHeaderImg} />
        </Box0>
        <Box1>{text[2].name}</Box1>
      </Container>
      <Box2>
        <Text>{text[0].name}</Text>
        <TextTwo>{text[1].name}</TextTwo>
      </Box2>
      <Box2>
        <TextThree>{text[3].name}</TextThree>
        <TextFour>{text[4].name}</TextFour>
      </Box2>
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
};

export default Header;
