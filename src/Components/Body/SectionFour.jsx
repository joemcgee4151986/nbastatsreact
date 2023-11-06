import React from "react";
import { PlayerData } from "./Body.jsx"
import * as StyledBodyComponents from "../Styled-List/Styled-Body";
const {
  Container,
  Text,
  Box5c,
  Box5reboundthree,
  Box5assistfour,
  Box5steal,
  Box6,
  Box7,
  Box8,
} = StyledBodyComponents;
const counter = 1;
export default function SectionFour() {
  return (
    <Container>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5c />
      <Box6>
        <p className="playerOne">
          {PlayerData[9].firstName}
          <br />
          {PlayerData[9].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[9].playerNumber} / {PlayerData[9].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[9].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5reboundthree />
      <Box6>
        <p className="playerOne">
        {PlayerData[10].firstName}
          <br />
          {PlayerData[10].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[10].playerNumber} / {PlayerData[10].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[10].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5assistfour />
      <Box6>
        <p className="playerOne">
        {PlayerData[6].firstName}
          <br />
          {PlayerData[6].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[6].playerNumber} / {PlayerData[6].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[6].assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5steal />
      <Box6>
        <p className="playerOne">
        {PlayerData[11].firstName}
          <br />
          {PlayerData[11].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[11].playerNumber} / {PlayerData[11].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[11].steals}</p>
      </Box8>
    </Container>
  );
}
