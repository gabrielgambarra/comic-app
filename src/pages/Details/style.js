import styled from "styled-components";
import { CharacterGridContainer } from "../../components/CharacterGrid/style";
import { Flex } from "../../shared/styles";

export const DetailsContainer = styled(Flex)`
  flex-direction: column;
  max-height: 100%;
  overflow: auto;
  padding: 0 130px;
`;

export const InfoContainer = styled(Flex)`
  width: 100%;
  margin-bottom: 1em;

  & h5 {
    color: ${(props) => props.theme.colors.secundary};
  }
`;

export const InfoGrid = styled(CharacterGridContainer)`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const InfoBlock = styled(Flex)`
  flex-direction: column;
  width: 100%;
`;

export const EditButtonsContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & button {
    padding: 0.5em;
    margin: 0 1em;
    border-radius: 8px;
    background-color: #fff;
  }
`;
