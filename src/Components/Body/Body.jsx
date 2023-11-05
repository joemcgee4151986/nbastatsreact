import React from "react";
import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
const { Box3, Box3a, Box3b, Box3c,} = StyledBodyComponents;

const BodyPage = () => {
  const BoxList = [Box3, Box3a, Box3b, Box3c];
  
  return (
    <div>
      {BoxList.map((BoxComponent, Box3List) => (
        <BoxComponent key={Box3List} />
      ))}
      
    </div>
  );
};
export const PlayerData = [{
  firstName : "James",
  lastName: "Harden",
  playerNumber: "13 G",
  team: "Hou",
  points: "28.0",
  rebounds: "0",
  assists: "0",
  steals: "0",
},
{
  firstName: "DeAndre",
  lastName: "Jordan" ,
  playerNumber: "6 C",
  team: "LAC",
  points: "0",
  Rebounds: "14.0",
  assists: "0",
  steals: "0",
},
{
  firstName: "Russel",
  lastName: "Westbrook" ,
  playerNumber: "0 G",
  team: "OKC",
  points: "0",
  Rebounds: "0",
  assists: "10.0",
  steals: "2.4"
},
{
  firstName: "Kevin",
  lastName: "Durant" ,
  playerNumber: "35 F",
  team: "OKC",
  points: "27.8",
  Rebounds: "0",
  assists: "0",
  steals: "0"
},
{
  firstName: "Dwight",
  lastName: "Howard" ,
  playerNumber: "12 C",
  team: "Hou",
  points: "0",
  Rebounds: "12.0",
  assists: "0",
  steals: "0"
},
{
  firstName: "John",
  lastName: "Wall" ,
  playerNumber: "2 G",
  team: "Was",
  points: "0",
  Rebounds: "0",
  assists: "9.9",
  steals: "0"
},
{
  firstName: "Ricky",
  lastName: "Rubio" ,
  playerNumber: "9 G",
  team: "Min",
  points: "0",
  Rebounds: "0",
  assists: "8.6",
  steals: "2.2"
},
];
export default BodyPage;
