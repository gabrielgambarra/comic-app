import React from "react";
import { SearchBarContainer } from "./style";
import { ReactComponent as SearchIcon } from "../../../providers/icons/icon-magnifier-white.svg";

const SearchBar = ({ onChange, value }) => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <input
        onChange={(event) => onChange(event.target.value)}
        type="text"
        value={value}
        placeholder="Search character..."
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
