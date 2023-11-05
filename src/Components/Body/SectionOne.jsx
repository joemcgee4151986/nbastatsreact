import React from "react";
import { PlayerData } from "./Body.jsx"
import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
const {
  Container,
  Text,
  Box5,
  Box5rebound,
  Box5assist,
  Box6,
  Box7,
  Box8,
} = StyledBodyComponents;
const counter = 1;
export default function SectionOne() {
  return (
    <Container>
      <Box7>
        <Text>{counter + 1}</Text>
      </Box7>
      <Box5 />
      <Box6>
        <p className="playerOne">
          {PlayerData[0].firstName} 
          <br />
          {PlayerData[0].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {PlayerData[0].playerNumber} / {PlayerData[0].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[0].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 1}</Text>
      </Box7>
      <Box5rebound />
      <Box6>
        <p className="playerOne">
          {PlayerData[1].firstName}
          <br />
          {PlayerData[1].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {PlayerData[1].playerNumber} / {PlayerData[1].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[1].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 1}</Text>
      </Box7>
      <Box5assist />
      <Box6>
        <p className="playerOne">
          {PlayerData[2].firstName}
          <br />
          {PlayerData[2].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {PlayerData[2].playerNumber} / {PlayerData[2].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[2].assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 1}</Text>
      </Box7>
      <Box5assist />
      <Box6>
        <p className="playerOne">
        {PlayerData[2].firstName}
          <br />
          {PlayerData[2].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[2].playerNumber} / {PlayerData[2].team}
          <br />
        </p>
      </Box6>
      <Box8>
      <p className="Number">{PlayerData[2].steals}</p>
      </Box8>
    </Container>
  );
}
