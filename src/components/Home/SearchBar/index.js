import React from "react";
import { SearchBarContainer, RemoveFilter } from "./style";
import { ReactComponent as SearchIcon } from "../../../providers/icons/icon-magnifier-white.svg";

const SearchBar = ({
  onChange,
  value,
  search,
  filterApplied,
  removeFilter,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      search();
    }
  };

  return (
    <SearchBarContainer>
      <SearchIcon />
      <form onSubmit={onSubmit}>
        <input
          onChange={(event) => onChange(event.target.value)}
          type="text"
          value={value}
          placeholder="Search character..."
        />
      </form>
      {filterApplied && (
        <RemoveFilter onClick={() => removeFilter()}>
          Remove filter
        </RemoveFilter>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
