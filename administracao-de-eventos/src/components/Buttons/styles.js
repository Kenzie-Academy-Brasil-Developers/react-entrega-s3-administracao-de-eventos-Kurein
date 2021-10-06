import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5px;
    max-width: 350px;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.main ? "#F79C9C" : "F7EB9C")};
  padding: 10px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 0.9;
  }
`;
