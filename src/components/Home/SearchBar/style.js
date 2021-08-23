import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  padding: 6px 0;
  margin-bottom: 1em;
  & svg {
    margin: 0 0.5em;
    width: 1em;
    height: 1em;
    & path,
    circle {
      stroke: ${(props) => props.theme.colors.secundary};
    }
  }
  & form {
    width: 100%;
    padding: 5px 5px 5px 0;

    input {
      border: none;
      width: 100%;
      font-size: ${(props) => props.theme.fontSizes.default};
      &::placeholder {
        color: ${(props) => props.theme.colors.secundary};
      }
    }
  }
`;

export const RemoveFilter = styled.button`
  margin-right: 0.5em;
  border-radius: 8px;
  background-color: #fff;
  color: ${(props) => props.theme.colors.dark};
`;
