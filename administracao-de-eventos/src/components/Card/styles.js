import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: #fbffd9;
  border-radius: 10px;
  padding: 10px;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
  @media only screen and (min-width: 1440px) {
    width: 30%;
  }
  @media only screen and (min-width: 2560px) {
    width: 23%;
  }
  img {
    width: 50%;
    height: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    button {
      border: none;
      background-color: #d09cf7;
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 5px;
      &:hover {
        cursor: pointer;
      }
      &:active {
        opacity: 0.9;
      }
    }
  }
  button {
    border: none;
    background-color: #d09cf7;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 5px;
  }
`;
