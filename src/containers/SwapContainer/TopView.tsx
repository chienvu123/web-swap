import React, { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

const SettingIcon = styled.img``;

const SettingButton = styled.div`
  cursor: pointer;
`;

const TopView = memo(() => {
  return (
    <Wrapper>
      <Container>
        <Title>Swap</Title>
        <SettingButton>
          <SettingIcon src="./images/icon-setting.svg" />
        </SettingButton>
      </Container>
    </Wrapper>
  );
});

export default TopView;
