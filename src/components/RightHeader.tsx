import React, { memo } from "react";
import styled from "styled-components";
import ConnectWalletButton from "./ConnectWalletButton";
import NetworkButton from "./NetworkButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RightHeader = memo(() => {
  return (
    <Wrapper>
      <NetworkButton />
      <ConnectWalletButton />
    </Wrapper>
  );
});

export default RightHeader;
