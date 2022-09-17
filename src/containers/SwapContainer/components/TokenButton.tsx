import React, { memo, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import colors from "../../../Colors";
import ArrowDown from "../../../components/ArrowDown";
import { AppContext } from "../../../context";

const Wrapper = styled.div``;
const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  background: ${colors.primaryDark};
  border-radius: 8px;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Label = styled.div`
  margin: 0 8px;
  font-weight: 500;
`;

const TokenButton = memo(({ token }: { token: any }) => {
  const { setShowSelectTokenModal } = useContext(AppContext);
  return (
    <Wrapper>
      <Button onClick={() => setShowSelectTokenModal(true)}>
        <LogoImage src={token.logo_url} />
        <Label>{token.ticker}</Label>
        <ArrowDown size={20} />
      </Button>
    </Wrapper>
  );
});

export default TokenButton;
