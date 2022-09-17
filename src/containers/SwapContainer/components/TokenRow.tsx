import React, { HTMLAttributes, memo, useState } from "react";
import styled from "styled-components";
import TokenButton from "./TokenButton";

const Wrapper = styled.div`
  margin-top: 8px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: rgb(44, 47, 54);
  padding: 12px;

  border: solid 1px transparent;
  &:hover {
    border: 1px solid rgb(64, 68, 79);
  }
`;

const RowCenter = styled.div`
  display: flex;
  align-items: center;
`;

const TextInput = styled.input`
  background: transparent;
  color: rgb(255, 255, 255);
  font-weight: 500;
  outline: none;
  border: none;
  font-size: 28px;
  flex: 1;
`;

const InputWrapper = styled.div`
  flex: 1;
  margin-right: 16px;
  box-sizing: border-box;
  width: 0px;
  overflow: hidden;
`;

const Fiat = styled.span`
  color: rgb(143, 150, 172);
  margin-left: 6px;
`;

const TokenRow = memo(({ source }: { source?: boolean }) => {
  const [value, setValue] = useState("");
  return (
    <Wrapper>
      <RowCenter>
        <InputWrapper>
          <TextInput
            placeholder="0.0"
            type={"number"}
            onChange={(e) => setValue(e.target.value)}
          />
        </InputWrapper>
        <TokenButton
          token={{ logo_url: "./images/ethereum.png", ticker: "ETH" }}
        />
      </RowCenter>
      <RowCenter style={{ justifyContent: "space-between", marginTop: 4 }}>
        <Fiat>{value ? "$1.234" : ""}</Fiat>
        <Fiat>{source ? "Balance: 0" : ""}</Fiat>
      </RowCenter>
    </Wrapper>
  );
});

export default TokenRow;
