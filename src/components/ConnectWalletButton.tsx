import React, { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(21, 61, 111, 0.44);
  border: 1px solid rgba(21, 61, 111, 0.44);
  padding: 8px;
  border-radius: 8px;
  margin-left: 16px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-weight: 500;

  color: rgb(80, 144, 234);
`;

const ConnectWalletButton = memo(() => {
  return (
    <Wrapper>
      <Text>Connect Wallet</Text>
    </Wrapper>
  );
});

export default ConnectWalletButton;
