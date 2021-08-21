import styled from "styled-components";
import { Flex } from "../../shared/styles";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
  width: 100%;
  margin: 1em 0;
`;
