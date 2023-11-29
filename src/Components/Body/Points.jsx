import React from "react";
import * as StyledBodyComponents from "../Styled-List/Styled-Body";
import { PlayerData } from "./Body.jsx"
const {
    Container,
    Text,
    Box5,
    Box6,
    Box7,
    Box8
} = StyledBodyComponents;
const counter = 1;
const Points =() => {
    return (
    <Container>
          <Box7 isPoints>
        <Text>{counter + 1}</Text>
      </Box7>
      <Box5 isPoints />
      <Box6>
        <p className="playerOneMobile">
          {PlayerData[0].firstName} 
          <br />
          {PlayerData[0].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocationMobile">
          {PlayerData[0].playerNumber} / {PlayerData[0].team}
          <br />
        </p>
      </Box6>
      <Box8 isPoints >
        <p className="NumberMobile">{PlayerData[0].points}</p>
      </Box8>


    </Container>
    );
};
export default Points