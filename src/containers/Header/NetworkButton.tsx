import React, { memo, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import colors from "../../Colors";
import listNetworks, { INetworkType } from "../../constants/listNetwork";
import { AppContext } from "../../context";
import ArrowDown from "../../components/ArrowDown";

const Wrapper = styled.div``;
const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  background: ${colors.primaryDark};
  border-radius: 8px;
`;

const RowCenter = styled.div`
  display: flex;
  align-items: center;
`;

const ItemWrapper = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  cursor: pointer;
  color: rgb(195, 197, 203);
  margin-top: 8px;
  border-radius: 8px;
  &:hover {
    color: #fff;
  }
  ${(p) =>
    p.active &&
    `
    background: rgba(0,0,0,0.5);
  `}
`;

const LogoImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Label = styled.div`
  margin: 0 8px;
  font-weight: 500;
`;

const ListPage = styled.div`
  margin-top: 4px;
`;

const PageRow = styled.div`
  display: flex;
  padding: 8px 0;
`;

const NetworkItem = memo(
  ({ item, onItemPress }: { item: INetworkType; onItemPress: () => void }) => {
    const { currentNetwork } = useContext(AppContext);

    const { name, logo_url } = item;
    const active = currentNetwork.ticker === item.ticker;
    return (
      <ItemWrapper onClick={onItemPress} active={active}>
        <RowCenter>
          <LogoImage src={logo_url} />
          <Label>{name}</Label>
        </RowCenter>
        {active ? (
          <ListPage>
            {item.pages.map((page, index) => (
              <PageRow key={index.toString()}>{page.label}</PageRow>
            ))}
          </ListPage>
        ) : null}
      </ItemWrapper>
    );
  }
);

const ListWrapper = styled.div`
  position: absolute;
  z-index: 1;
`;

const ListContainer = styled.div`
  width: 240px;
  background-color: ${colors.primaryDark};
  padding: 12px;
  border-radius: 12px;
  margin-top: 12px;
`;

const ListLabel = styled.span`
  color: ${colors.secondText};
`;

const ListHover = memo(
  ({
    show,
    onSelected,
  }: {
    show: boolean;
    onSelected: (selectNetwork: INetworkType) => void;
  }) => {
    if (!show) return null;
    return (
      <ListWrapper>
        <ListContainer>
          <ListLabel>Select a network</ListLabel>
          {listNetworks.map((network, index) => (
            <NetworkItem
              item={network}
              key={index.toString()}
              onItemPress={() => onSelected(network)}
            />
          ))}
        </ListContainer>
      </ListWrapper>
    );
  }
);

const NetworkButton = memo(() => {
  const { currentNetwork, setCurrentNetwork } = useContext(AppContext);

  const [hover, setHover] = useState(false);

  const onSelectedNetwork = useCallback(
    (network: INetworkType) => {
      setHover(false);
      setCurrentNetwork(network);
    },
    [setCurrentNetwork]
  );

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
      <ListHover show={hover} onSelected={onSelectedNetwork} />
    </Wrapper>
  );
});

export default NetworkButton;
