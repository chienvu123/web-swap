import React, { HTMLAttributes, memo, useContext, useState } from "react";
import styled from "styled-components";
import colors from "../../Colors";
import { AppContext } from "../../context";
import TokenButton from "./TokenButton";

const Wrapper = styled.div`
  margin-top: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgb(58, 62, 77);
  }
`;

const LogoImage = styled.img`
  width: 28px;
  height: 28px;
`;
const Fiat = styled.span`
  color: rgb(143, 150, 172);
  margin-left: 6px;
`;

const Column = styled.div`
  flex: 1;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

const TokenName = styled.span`
  font-weight: 500;
`;

const TokenSymbol = styled.span`
  font-size: 12px;
  color: ${colors.secondText};
`;

const TokenRow = memo(() => {
  const { setShowSelectTokenModal } = useContext(AppContext);

  return (
    <Wrapper onClick={() => setShowSelectTokenModal(false)}>
      <LogoImage src="./images/ethereum.png" />
      <Column>
        <TokenName>Ethereum</TokenName>
        <TokenSymbol>ETH</TokenSymbol>
      </Column>
      <Fiat>0</Fiat>
    </Wrapper>
  );
});

export default TokenRow;
