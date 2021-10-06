import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
