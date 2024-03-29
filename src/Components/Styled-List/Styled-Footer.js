import styled from "styled-components";
export const Div = styled.div`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;
export const Box2 = styled.div`
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  width: 25%;
  background-color: gray;
  color: white;
  outline: solid 1px white;
  @media (max-width: 811px) {
    width: 50%;
    white-space: nowrap;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;



export const TextSix = styled.div`
display:none;
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  @media (min-width: 600px) {
   display:block;

    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;


export const TextEight = styled.div`
display:none;
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 320px) {
   display:block;
    
    font-style: core-sans-d;
    font-size: 2em;
  }
`;
