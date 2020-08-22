/* eslint-disable react-hooks/exhaustive-deps */
import React , { useEffect }from "react";
import ItemList from "./components/ItemList";
import styled from "@emotion/styled";
import { fetchItems } from './actions'
import { connect } from 'react-redux'
import './index.css'

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
`;

const App = (props) => {
  useEffect(() => {
    props.fetchItems();
    console.log(props.items)
  }, []); // on mount/ on first render

  return (
    <Wrapper>
      <ItemList items={props.items} />
    </Wrapper>
  );
};

const mapStateToProps = ({ items }) => ({
  items,
});

export default connect(mapStateToProps, { fetchItems })(App);
