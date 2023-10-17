import styled, { css } from 'styled-components'

export const Div = styled.div`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;

export const H1 = styled.h1`
display: flex;
width: 50;
  flex-shrink: 0;
  font-size: 6em;
  font-style:core-sans-d;
  padding: 20px;
  margin-top: -19px;
  color:black;
  margin-bottom: 67px;
  @media (max-width: 768px) {
    display: none;
    }
    
`;
export const H4 = styled.h4`
display: block; 
margin: auto;
font-style:core-sans-d;
font-size:2em;


`

export const BODY = styled.body`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;


export const Box0 = styled.div`
display: flex;
flex-direction: row;
word-wrap: break-word;
padding-right: 0;
padding-left: 0;
width:70%;
@media (max-width: 768px) {
    width:100%;
    }
`;

const mobileMediaBox1 = css`
padding: 10px; 
margin-top: -77px; 
`;

export const Box1 = styled.div`
  background-color: blue;
  color: white;
  padding: 20px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  font-size: 2.8em;
  margin-bottom: -5px;
${mobileMediaBox1};
 
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left; 
`;



export const Box2 = styled.div`
  display: inline-flex;
  flex-direction: row;
  text-align: center;
  width: 25%;
  background-color: gray;
  color: white;
  outline: solid 1px white;
  @media (max-width: 768px) {
    max-width: 25%;
    white-space: nowrap;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
    }
    `

export const Image= styled.img `
margin-left: 47.5%;
  display: block;
  height: 120px;
background-repeat: no-repeat;
background-size: contain;
@media (max-width: 768px){
    display:flex;
    min-width: 100%;
    max-height: 100%;
    padding-bottom: 4.25rem;
    margin:0;
`



