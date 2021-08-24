import styled from "styled-components";

export const CharacterGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
  width: 100%;
  overflow-y: auto;
  height: 100%;
`;
