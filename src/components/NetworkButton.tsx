import React, { memo, useState } from "react";
import styled from "styled-components";
import colors from "../Colors";
import listNetworks from "../constants/listNetwork";
import ArrowDown from "./ArrowDown";

const Wrapper = styled.div``;
const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  background: ${colors.primaryDark};
  border-radius: 8px;
`;

const ItemWrapper = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Label = styled.div`
  margin: 0 8px;
`;

const NetworkItem = memo(
  ({ name, logo_url }: { name: string; logo_url: string }) => {
    return (
      <ItemWrapper>
        <LogoImage src={logo_url} />
        <Label>{name}</Label>
        <ArrowDown />
      </ItemWrapper>
    );
  }
);

const ListWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 50px;
  padding-top: 20px;
  width: 240px;
  background-color: ${colors.primaryDark};
`;

const ListHover = memo(({ show }: { show: boolean }) => {
  if (!show) return null;
  return (
    <ListWrapper>
      {listNetworks.map((network, index) => (
        <NetworkItem {...network} key={index.toString()} />
      ))}
    </ListWrapper>
  );
});

const NetworkButton = memo(() => {
  const [currentNetwork, setCurrentNetwork] = useState(listNetworks[0]);
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Button>
        <LogoImage src={currentNetwork.logo_url} />
        <Label>{currentNetwork.name}</Label>
        <ArrowDown size={20} />
      </Button>
      <ListHover show={hover} />
    </Wrapper>
  );
});

export default NetworkButton;
