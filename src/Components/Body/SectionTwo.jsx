import React from "react";
import data from "../PlayerData/PlayerData.jsx";
import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
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
          {data[16].firstName}
          <br />
          {data[17].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[18].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[19].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 2}</Text>
      </Box7>
      <Box5reboundtwo />
      <Box6>
        <p className="playerOne">
          {data[20].firstName}
          <br />
          {data[21].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[22].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[23].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 2}</Text>
      </Box7>
      <Box5assisttwo />
      <Box6>
        <p className="playerOne">
          {data[24].firstName}
          <br />
          {data[25].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[26].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[27].Assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 2}</Text>
      </Box7>
      <Box5assistfour />
      <Box6>
        <p className="playerOne">
          {data[28].firstName}
          <br />
          {data[29].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[30].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[31].Steals}</p>
      </Box8>
    </Container>
  );
}
