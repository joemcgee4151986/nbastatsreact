import React from "react";
import { PlayerData } from "./Body"
import * as StyledBodyComponents from "../Styled-List/Styled-Body";
const {
  Container,
  Text,
  Box5b,
  Box5assistthree,
  Box6,
  Box7,
  Box8,
} = StyledBodyComponents;
const counter = 1;
export default function SectionTwo() {
  return (
    <Container>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5b />
      <Box6>
        <p className="playerOne">
          {PlayerData[7].firstName}
          <br />
          {PlayerData[7].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[7].playerNumber} / {PlayerData[7].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[7].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5b />
      <Box6>
        <p className="playerOne">
        {PlayerData[7].firstName}
          <br />
          {PlayerData[7].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[7].playerNumber} / {PlayerData[7].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[7].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5assistthree />
      <Box6>
        <p className="playerOne">
        {PlayerData[8].firstName}
          <br />
          {PlayerData[8].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[8].playerNumber} / {PlayerData[8].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[8].assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5assistthree />
      <Box6>
        <p className="playerOne">
        {PlayerData[8].firstName}
          <br />
          {PlayerData[8].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[8].playerNumber} / {PlayerData[8].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[8].steals}</p>
      </Box8>
    </Container>
  );
}
