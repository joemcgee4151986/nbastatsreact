import React from "react";
import data from "../PlayerData/PlayerData.jsx";
import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
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
          {data[48].firstName}
          <br />
          {data[49].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[50].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[51].points}</p>
      </Box8>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5reboundthree />
      <Box6>
        <p className="playerOne">
          {data[52].firstName}
          <br />
          {data[53].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[54].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[55].Rebounds}</p>
      </Box8>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5assistfour />
      <Box6>
        <p className="playerOne">
          {data[56].firstName}
          <br />
          {data[57].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[58].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[59].Assists}</p>
      </Box8>
      <Box7>
        <Text>{counter + 4}</Text>
      </Box7>
      <Box5steal />
      <Box6>
        <p className="playerOne">
          {data[60].firstName}
          <br />
          {data[61].lastName}
          <br />
          <br />
        </p>
        <p className="numberLocation">
          {data[62].numberAndTeam}
          <br />
        </p>
      </Box6>
      <Box8>
        <p className="Number">{data[63].Steals}</p>
      </Box8>
    </Container>
  );
}
