import React, { memo, useCallback, useContext, useState } from "react";
import styled from "styled-components";
import colors from "../../Colors";
const listTab = [
  {
    label: "Swap",
    tab: "swap",
  },
  {
    label: "Pool",
    tab: "pool",
  },
  {
    label: "Vote",
    tab: "vote",
  },
];

const Wrapper = styled.div`
  display: flex;
  padding: 2px;
  border-radius: 8px;
  background-color: ${colors.primaryDark};
`;

const ItemWrapper = styled.div<{ active: boolean }>`
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 2px;
  color: rgb(195, 197, 203);
  &:hover {
    color: #fff;
  }
  ${(p) =>
    p.active &&
    `
    background: ${colors.secondDark};
    color: #fff;
  `}
`;
const TabText = styled.span``;

const TabItem = memo(
  ({
    label,
    tab,
    onSelect,
    active,
  }: {
    label: string;
    tab: string;
    onSelect: (tab: string) => void;
    active: boolean;
  }) => {
    return (
      <ItemWrapper onClick={() => onSelect(tab)} active={active}>
        <TabText>{label}</TabText>
      </ItemWrapper>
    );
  }
);

const Tabbar = memo(() => {
  const [tabActive, setTabActive] = useState(listTab[0].tab);
  const onItemClick = useCallback((tabClick: string) => {
    setTabActive(tabClick);
  }, []);
  return (
    <Wrapper>
      {listTab.map((item, index) => (
        <TabItem
          {...item}
          onSelect={onItemClick}
          active={tabActive === item.tab}
          key={index.toString()}
        />
      ))}
    </Wrapper>
  );
});

export default Tabbar;
