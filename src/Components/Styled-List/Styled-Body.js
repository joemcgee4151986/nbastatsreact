import styled from "styled-components";
import Curry from "../../assets/Curry.JPG";
import Andre from "../../assets/Andre.JPG";
import Rajon from "../../assets/Rajon.JPG";
import Russel from "../../assets/Russel.JPG";
import player1 from "../../assets/Hardenpic.jpeg";
import player2 from "../../assets/Durant.jpg";
import player3 from "../../assets/DeMarcus.jpg";
import player4 from "../../assets/LeBron.jpg";
import player5 from "../../assets/DeAndre.png";
import player6 from "../../assets/Dwight.jpg";
import player7 from "../../assets/Hassan.jpg";
import player8 from "../../assets/Russelw.png";
import player9 from "../../assets/John.png";
import player10 from "../../assets/Chris.png";
import player11 from "../../assets/Ricky.png";
import player12 from "../../assets/Steph.png";
export const Text = styled.p`
  margin-top: 0;
`;
export const H1 = styled.h1`
  margin-top: -10px;
  font-size: 80px;
  font-style: Helvetica Condensed;
  color: gray;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Box3 = styled.div`
display: inline-flex;
background-repeat: no-repeat;
position: relative;
min-width: 25%;
min-height:209px;


color: white;
background-image: url(${Curry});

outline: solid 1px white;
@media (max-width: 768px) {
  min-width: 100%; 
`;

export const Box3a = styled.div`
  display: inline-flex;
  background-repeat: no-repeat;
  position: relative;
  min-width: 25%;
  min-height: 209px;

  text-align: center;
  color: white;
  background-image: url(${Andre});
  outline: solid 1px white;
  font: Helvetica;
<<<<<<< HEAD
  @media (max-width: 768px) {
    display:flex;
    flex:1;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width:100%;
=======
  @media (max-width: 811px) {
    width: 50%;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
  }
`;

export const Box3b = styled.div`
  display: inline-flex;
  background-repeat: no-repeat;
  position: relative;
  min-width: 25%;
  min-height: 209px;

  text-align: center;
  color: white;
  background-image: url(${Rajon});
  outline: solid 1px white;
  font: Helvetica;
  @media (max-width: 811px) {
   display:none;
  }
`;

export const Box3c = styled.div`
  display: inline-flex;
  background-repeat: no-repeat;
  position: relative;
  min-width: 25%;
  min-height: 209px;

  text-align: center;
  color: white;
  background-image: url(${Russel});
  outline: solid 1px white;
  @media (max-width: 768px) {
    display:none;
   }
`;
export const Box4 = styled.div`
  align-items: flex-start;
  position: relative;
  background-color: white;
  color: gray;
  flex-direction: row;
  outline: solid 1px white;
  width: 2%;
  height: 10%;
  font-size: 2em;
  background: #cdcdcd;
  padding-bottom: 3%;

  justify-content: center;
`;

export const Box5BaseStyles = styled.div`
  display: inline-flex;
  position: relative;
  background-color: gray;
  flex-direction: row;
  outline: solid 1px white;
  width: 5%;
  height: 10%;
  padding-top: 5%;
  align-items: center;
  justify-content: center;
  background-size: cover;
<<<<<<< HEAD

  @media (max-width: 480px) {
    display: none; 
  }
`;


export const Box5 = styled(Box5BaseStyles)`
 
  background-image: url(${player1});
  
=======
  ${({ isPoints })  => isPoints && `
  display:none;
  @media (max-width: 480px) {
   display: block;
  `}
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;
export const Box5a = styled(Box5BaseStyles)`

<<<<<<< HEAD
  
=======
  padding-top: 5%;
  align-items: center;
  justify-content: center;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
  background-image: url(${player2});

`;
export const Box5b = styled(Box5BaseStyles)`

  background-image: url(${player3});
 
`;

export const Box5c = styled(Box5BaseStyles)`

  background-image: url(${player4});
 
`;

export const Box5rebound = styled(Box5BaseStyles)`
 

 
  background-image: url(${player5});
<<<<<<< HEAD
  
  
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;

export const Box5reboundtwo = styled(Box5BaseStyles)`
  
  background-image: url(${player6});
<<<<<<< HEAD
  
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;

export const Box5reboundthree = styled(Box5BaseStyles)`
 
  background-image: url(${player7});
<<<<<<< HEAD
 
 }
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;
export const Box5assist = styled(Box5BaseStyles)`

  background-image: url(${player8});
<<<<<<< HEAD
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;

export const Box5assisttwo = styled(Box5BaseStyles)`
 
  background-image: url(${player9});
<<<<<<< HEAD
 
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;

export const Box5assistthree = styled(Box5BaseStyles)`

  background-image: url(${player10});
<<<<<<< HEAD
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;

export const Box5assistfour = styled(Box5BaseStyles)`

  background-image: url(${player11});
<<<<<<< HEAD
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;

export const Box5steal = styled(Box5BaseStyles)`

  background-image: url(${player12});
<<<<<<< HEAD
=======
  background-size: cover;
>>>>>>> 5d458a70300d18f6ad24748347d3768c384d688d
`;
export const Box6 = styled.div`
position: relative;
outline: solid 1px white;
width: 14%; 
height:52px;
padding-top: 3%;

left: 1%;
p.playerOne{
  display: flex;
 
  width: 50;
  margin-top: -19%;
  font-size: 19px;
color:Blue;
word-wrap: break-word; 
.break{
  line-height: 1;
}
}
}
.playerOneMobile{
  display:none;
@media (max-width: 480px) {
display:block;
color:yellow;
}
}
p.numberLocation{
  display:none;
  @media (max-width: 300px) {
    display:block;
}

@media (max-width: 480px) {
  display:flex;
  flex-shrink: 0;
  margin: auto;
  }
  ${({ isPoints })  => isPoints && `
  display:none;
  @media (max-width: 300px) {
   display: block;
  `}
`;

export const Box7 = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  flex-direction: column;
  outline: solid 1px white;
  width: 2%;
  height: 10%;
  font-size: 2em;
  padding-bottom: 3%;
  color: gray;
  background: #f8f8f8;
  justify-content: center;
  ${({ isPoints })  => isPoints && `
  display:none;
  @media (max-width: 480px) {
   display: block;
  `}
`;
export const Box8 = styled.div`
display:flex;
align-items: flex-start;
position: relative;

color: gray;
flex-direction: column; 
outline: solid 1px white;
width: 4%; 
height:2.2em;
font-size:1.5em;
padding-left: 0%;

justify-content: center;

p.Number{
  color:black;
   }
   .NumberMobile{
    display:none;
    @media (max-width: 480px) {
      display:block;
      color:black;
    }
    .numberLocationMobile{
      display:none;
      @media (max-width: 480px) {
      display:block;
      color:black;
      }

    }
}


}
${({ isPoints })  => isPoints && `
display:none;
@media (max-width: 300px) {
  display: block;
}
`};
`;




export const Image = styled.img`
margin-left: 20%;
display: block;
height: auto;
max-width: 100%;
background-repeat: no-repeat;
background-size: contain;
  @media (max-width: 768px) {
    display: none;
  }
`;
