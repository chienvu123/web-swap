import React, { memo } from "react";
import styled from "styled-components";
import TokenRow from "./components/TokenRow";

const Wrapper = styled.div`
  position: relative;
`;

const IconSection = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 16px;
  background: rgb(25, 27, 31);
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;
const IconSwap = styled.img``;

const MainSwap = memo(() => {
  return (
    <Wrapper>
      <TokenRow />
      <IconSection>
        <IconSwap src="./images/icon-swap.svg" />
      </IconSection>
      <TokenRow />
    </Wrapper>
  );
});

export default MainSwap;
