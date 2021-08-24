import React from "react";
import { EmptyListContainer } from "./style";

const EmptyList = ({ notFound }) => {
  return (
    <EmptyListContainer>
      <h3>¯\_(ツ)_/¯</h3>
      {notFound ? <h5>Character not found</h5> : <h5>Empty List</h5>}
    </EmptyListContainer>
  );
};

export default EmptyList;
