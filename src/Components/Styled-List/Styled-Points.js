import styled from "styled-components";
import {Box5,Box6,Box7,Box8} from "./Styled-Body.js"


export const BoxList = styled(Box7)`
display:none;
font-size: 1em;
@media (max-width: 480px) {
display:block;
margin-top:20%;
margin-left:5%;
width:5%;
}
`;

export const BoxPlayer = styled(Box5)`

display:none;
@media (max-width: 480px) {
    display:block;
    margin-top: 20%;
    margin-left:15%;
}
`;

export const BoxInfo = styled(Box6)`

p.numberLocationMobile{
    display:none;

    @media (max-width: 768px) {
    display:block;
    text-align:center;
    }
}
    display:none;
  @media (max-width: 768px) {
  display:block;
  }
}
`;

export const BoxStats = styled(Box8)`
    p.NumberMobile{
      display:none;
        @media (max-width: 768px) {
          display:block;
          color:red;
          margin-bottom:30%;
        }
    }
`;

