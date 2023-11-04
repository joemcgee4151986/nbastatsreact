import React from "react";
import data from "../PlayerData/PlayerData.jsx";
import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
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
          {data[32].firstName}
          <br />
          {data[33].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[34].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[35].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5b />
      <Box6>
        <p className="playerOne">
          {data[36].firstName}
          <br />
          {data[37].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[38].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[39].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5assistthree />
      <Box6>
        <p className="playerOne">
          {data[40].firstName}
          <br />
          {data[41].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[42].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[43].Assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 3}</Text>
      </Box7>
      <Box5assistthree />
      <Box6>
        <p className="playerOne">
          {data[44].firstName}
          <br />
          {data[45].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[46].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[47].Steals}</p>
      </Box8>
    </Container>
  );
}
