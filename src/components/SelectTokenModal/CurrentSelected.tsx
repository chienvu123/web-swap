import React, { memo, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import TokenButton from "./TokenButton";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
`;
const CurrentSelected = memo(() => {
  return (
    <Wrapper>
      <TokenButton
        token={{ logo_url: "./images/ethereum.png", ticker: "ETH" }}
      />
      <TokenButton
        token={{ logo_url: "./images/ethereum.png", ticker: "ETH1" }}
      />
      <TokenButton
        token={{ logo_url: "./images/ethereum.png", ticker: "ETH2" }}
      />
      <TokenButton
        token={{ logo_url: "./images/ethereum.png", ticker: "ETH3" }}
      />
      <TokenButton
        token={{ logo_url: "./images/ethereum.png", ticker: "ETH3" }}
      />
      <TokenButton
        token={{ logo_url: "./images/ethereum.png", ticker: "ETH3" }}
      />
    </Wrapper>
  );
});

export default CurrentSelected;
