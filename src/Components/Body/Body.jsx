import React from "react";

import * as StyledBodyComponents from "../Styled-List/Styled-Body.jsx";
const { Box3, Box3a, Box3b, Box3c } = StyledBodyComponents;

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
export default BodyPage;
