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
}]
export default BodyPage;
