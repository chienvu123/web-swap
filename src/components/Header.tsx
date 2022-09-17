import React, { memo } from "react";
import styled from "styled-components";
import RightHeader from "./RightHeader";
import Tabbar from "./Tabbar";

const Wrapper = styled.header`
  position: fixed;
  top: 0px;
  z-index: 1020;
  width: 100%;
`;
const LeftElement = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

const Header = memo(() => {
  return (
    <Wrapper>
      <HeaderContainer>
        <LeftElement />
        <Tabbar />
        <RightHeader />
      </HeaderContainer>
    </Wrapper>
  );
});

export default Header;
