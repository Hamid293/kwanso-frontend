import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 80%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
