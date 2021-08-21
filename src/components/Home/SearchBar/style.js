import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  outline: none;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  padding: 6px 0;
  & svg {
    margin: 0 0.5em;
    width: 1em;
    height: 1em;
    & path,
    circle {
      stroke: ${(props) => props.theme.colors.secundary};
    }
  }
  & input {
    padding: 5px 5px 5px 0;
    border: none;
    width: 100%;
    outline: none;
    font-size: ${(props) => props.theme.fontSizes.default};
    &::placeholder {
      color: ${(props) => props.theme.colors.secundary};
    }
  }
`;
