import React, { memo, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import colors from "../../Colors";

const Wrapper = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid rgb(64, 68, 79);
  margin: 6px;
  &:hover {
    background-color: rgb(58, 62, 77);
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
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
  return (
    <Wrapper>
      <Button>
        <LogoImage src={token.logo_url} />
        <Label>{token.ticker}</Label>
      </Button>
    </Wrapper>
  );
});

export default TokenButton;
