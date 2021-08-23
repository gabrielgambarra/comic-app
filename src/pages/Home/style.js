import styled from "styled-components";
import { Flex } from "../../shared/styles";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
  width: 100%;
  overflow-y: auto;
  height: 100%;
`;

export const Pagination = styled(Flex)`
  justify-content: center;
  align-items: center;
  padding: 0.5em 0 1em;

  & button {
    padding: 0.5em;
    margin: 0 1em;
    border-radius: 8px;
    background-color: #fff;
  }
`;
