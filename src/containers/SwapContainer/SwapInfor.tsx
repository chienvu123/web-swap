import React, { memo } from "react";
import styled from "styled-components";
import colors from "../../Colors";
import ArrowDown from "../../components/ArrowDown";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowCenter = styled.div`
  display: flex;
  align-items: center;
`;

const RowPrice = styled(RowCenter)`
  justify-content: space-between;
  margin-top: 4px;
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
`;

const Rate = styled.span`
  font-weight: 500;
`;

const Fiat = styled.span`
  color: ${colors.secondText};
  margin-left: 4px;
`;

const DetailInfor = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  padding: 12px;
  border: solid 1px rgb(64, 68, 79);
  border-radius: 16px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(60, 60, 63);
  margin-top: 16px;
`;

const HiddenText = styled.span`
  font-size: 13px;
  color: rgb(109, 109, 117);
`;

const SwapInfor = memo(() => {
  return (
    <Wrapper>
      <Container>
        <RowPrice style={{ padding: 8 }}>
          <RowCenter>
            <Icon src="./images/icon-infor.svg" />
            <Rate style={{ marginLeft: 8 }}>1 ETH = 1456 USDC </Rate>
            <Fiat>{`($1456,33)`}</Fiat>
          </RowCenter>
          <ArrowDown />
        </RowPrice>
        <DetailInfor>
          <RowPrice>
            <Rate>Expected Output</Rate>
            <Rate>1 ETH</Rate>
          </RowPrice>
          <RowPrice>
            <Rate>Price Impact</Rate>
            <Rate>0.00%</Rate>
          </RowPrice>
          <Line />
          <RowPrice>
            <HiddenText>Maximum sent after slippage (0.50%)</HiddenText>
            <HiddenText>1456 USDC</HiddenText>
          </RowPrice>
          <RowPrice>
            <HiddenText>Network Fee</HiddenText>
            <HiddenText>$0.23</HiddenText>
          </RowPrice>
        </DetailInfor>
      </Container>
    </Wrapper>
  );
});

export default SwapInfor;
