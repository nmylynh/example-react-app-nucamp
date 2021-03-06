import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 30%;
  border: ${(props) =>
    props.selected ? "2px dashed purple" : "1px solid black"};
  margin: 1rem;
  background-color: lavender;
  height: auto;
  padding: 1rem;
`;
const Header = styled.h4`
  color: purple;
`;

const Card = ({ onClick, item, selected, index }) => {
  const { name, bonus, built_with, combos } = item;

  const renderCombos = (arr) => {
    const comboArray = arr.map((item, index) => {
      return <span key={index}>{item}, </span>;
    });
    return comboArray;
  };
  return (
    <CardWrapper key={index} onClick={() => onClick(name)} selected={selected}>
      <Header>{name}</Header>
      <Header>{bonus}</Header>
      <Header>Combinations:</Header>
      <p>
        {!built_with
          ? renderCombos(combos)
          : `${built_with.item_1}, ${built_with.item_2}`}
      </p>
    </CardWrapper>
  );
};

export default Card;
