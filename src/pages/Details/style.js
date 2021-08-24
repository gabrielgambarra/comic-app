import styled from "styled-components";
import { Flex } from "../../shared/styles";

export const DetailsContainer = styled(Flex)`
  flex-direction: column;
  max-height: 100%;
  overflow: auto;
  padding: 0 130px;

  & h5 {
    color: ${(props) => props.theme.colors.secundary};
  }
`;

export const InfoContainer = styled(Flex)`
  width: 100%;
  margin-bottom: 1em;
`;
