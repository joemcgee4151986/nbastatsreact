import React from "react";
import data from "../PlayerData/PlayerData.jsx";
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
          {data[8].firstName}
          <br />
          {data[9].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[10].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[11].Assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 1}</Text>
      </Box7>
      <Box5assist />
      <Box6>
        <p className="playerOne">
          {data[12].firstName}
          <br />
          {data[13].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[14].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[15].Steals}</p>
      </Box8>
    </Container>
  );
}
