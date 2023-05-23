import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const MainDiv = styled.div`

    display: flex;
    align-items: space-between;
    width: 100vw;
    height: 100vh;

`

function HomeSeries() {
  return (
    <MainDiv>
    <Header />
      <p>HomeSeries</p>
    </MainDiv>
  )
}

export default HomeSeries