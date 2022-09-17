import React, { memo } from "react";
import styled from "styled-components";
import SubmitButton from "../../components/SubmitButton";
import MainSwap from "./MainSwap";
import SwapInfor from "./SwapInfor";
import TopView from "./TopView";

const Wrapper = styled.div`
  width: 480px;
  height: 350px;
  padding: 0 8px;
`;

const Container = styled.div`
  padding: 8px;
  background: rgb(25, 27, 31);
  border-radius: 24px;
`;

const SwapContainer = memo(() => {
  return (
    <Wrapper>
      <Container>
        <TopView />
        <MainSwap />
        <SwapInfor />
        <SubmitButton text="Connect wallet" />
      </Container>
    </Wrapper>
  );
});

export default SwapContainer;
