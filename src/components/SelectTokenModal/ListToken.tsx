import React, { memo } from "react";
import styled from "styled-components";
import TokenRow from "./TokenRow";

const Wrapper = styled.div`
  flex: 1 1 0%;
  overflow-y: scroll;
  border-top: 1px solid rgb(64, 68, 79);
`;

const Container = styled.div`
  flex: 1;
  overflow: auto;
`;

const ListToken = memo(() => {
  return (
    <Wrapper>
      <Container>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((token, index) => (
          <TokenRow />
        ))}
      </Container>
    </Wrapper>
  );
});

export default ListToken;
