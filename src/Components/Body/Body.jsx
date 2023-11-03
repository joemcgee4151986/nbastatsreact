import React from "react";
import data from "../PlayerData/PlayerData.jsx";
import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
const {
  Container,
  Text,
  Box3,
  Box3a,
  Box3b,
  Box3c,
  Box5,
  Box5a,
  Box5b,
  Box5c,
  Box5rebound,
  Box5reboundtwo,
  Box5reboundthree,
  Box5assist,
  Box5assisttwo,
  Box5assistthree,
  Box5assistfour,
  Box5steal,
  Box6,
  Box7,
  Box8,
} = StyledBodyComponents;

const BodyPage = () => {
  const counter = 1;
  const BoxList = [Box3, Box3a, Box3b, Box3c];
  return (
    <div>
      {BoxList.map((BoxComponent, Box3List) => (
        <BoxComponent key={Box3List} />
      ))}
      <Container>
        <Box7>
          <Text>{counter + 1}</Text>
        </Box7>
        <Box5 />
        <Box6>
          <p className="playerOne">
            {data[0].firstName}
            <br />
            {data[1].lastName}
            <br />
            <br />
          </p>
          <p className="numberLocation">
            {data[2].numberAndTeam}
            <br />
          </p>
        </Box6>
        <Box8>
          <p className="Number">{data[3].points}</p>
        </Box8>
        <Box7>
          <Text>{counter + 1}</Text>
        </Box7>
        <Box5rebound />
        <Box6>
          <p className="playerOne">
            {data[4].firstName}
            <br />
            {data[5].lastName}
            <br />
            <br />
          </p>
          <p className="numberLocation">
            {data[6].numberAndTeam}
            <br />
          </p>
        </Box6>
        <Box8>
          <p className="Number">{data[7].Rebounds}</p>
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
    </div>
  );
};
export default BodyPage;
