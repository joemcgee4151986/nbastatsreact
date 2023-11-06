import React from "react";
import { PlayerData } from "./Body.jsx"
import * as StyledBodyComponents from "../Styled-List/Styled-Body";
const {
  Container,
  Text,
  Box5a,
  Box5reboundtwo,
  Box5assisttwo,
  Box5assistfour,
  Box6,
  Box7,
  Box8,
} = StyledBodyComponents;
const counter = 1;
export default function SectionTwo() {
  return (
    <Container>
      <Box7>
        <Text>{counter + 2}</Text>
      </Box7>
      <Box5a />
      <Box6>
        <p className="playerOne">
          {PlayerData[3].firstName}
          <br />
          {PlayerData[3].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[3].playerNumber} / {PlayerData[3].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[3].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 2}</Text>
      </Box7>
      <Box5reboundtwo />
      <Box6>
        <p className="playerOne">
          {PlayerData[4].firstName}
          <br />
          {PlayerData[4].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[4].playerNumber} / {PlayerData[4].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[4].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 2}</Text>
      </Box7>
      <Box5assisttwo />
      <Box6>
        <p className="playerOne">
          {PlayerData[5].firstName}
          <br />
          {PlayerData[5].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
        {PlayerData[5].playerNumber} / {PlayerData[5].team}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{PlayerData[5].assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 2}</Text>
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
        <p className="Number">{PlayerData[6].steals}</p>
      </Box8>
    </Container>
  );
}
