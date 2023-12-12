import styled, { css } from "styled-components";
export const Div = styled.div`
  margin: 0;
  height: 100%;
  overflow: hidden;
`;

export const TextNBA = styled.h1`
  display: flex;
  width: 50;
  flex-shrink: 0;
  font-size: 6em;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  line-height: 1.1;
  padding: 20px;
  margin-top: -19px;
  color: #57595b;
  margin-bottom: 67px;
  @media (max-width: 600px) {
    font-size: 3em;
  }
  @media (max-width: 320px) {
    font-size: 1.8em;
  }
`;
export const Text = styled.div`
  display: none;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    display: block;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;


export const TextTwo = styled.div`
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  font-family: "Oswald", sans-serif;
  @media (max-width: 480px) {
    display: block;
    max-width: 25%;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
  @media (max-width: 768px) {
    display: none;
    max-width: 25%;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;
export const TextThree = styled.div`
  display: none;

  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    

    display: block;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;

export const TextFour = styled.div`
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    display: none;

    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;
export const TextFive = styled.div`
  display: none;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    display: block;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;
export const TextSix = styled.div`
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    display: none;

    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;
export const TextSeven = styled.div`
  display: none;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    display: block;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;

export const TextEight = styled.div`
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  @media (max-width: 768px) {
    display: none;
    margin: auto;
    font-style: core-sans-d;
    font-size: 2em;
  }
`;

export const H4 = styled.h4`
  display: block;
  margin: auto;
  font-style: core-sans-d;
  font-size: 2em;
  @media screen and (max-width: 768px) {
    display: visible;
  }
`;
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
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
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
    width: 25%;
    white-space: nowrap;
    font-size: 12px;
    margin-left: auto;
    margin-right: 0;
  }
  @media (max-width: 320px) {
    width: 25%;
  }
`;

export const Image = styled.img`
  margin-left: 34.5%;
  display: block;
  height: 120px;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 768px) {
    display: none;
    min-width: 100%;
    max-height: 100%;
    padding-bottom: 4.25rem;
    margin: 0;
  }
`;
