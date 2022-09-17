import React, { memo, useCallback, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../../context";
import CurrentSelected from "./CurrentSelected";
import ListToken from "./ListToken";
import SearchSection from "./SearchSection";
import TopView from "./TopView";

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 420px;
  height: 72vh;
  min-height: 72vh;
  max-height: 72vh;
  padding: 8px;
  background: rgb(25, 27, 31);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
`;

function useOutsideClick(ref: any, onClickOutside: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

const SelectTokenModal = memo(() => {
  const containerRef = useRef(null);
  const { setShowSelectTokenModal } = useContext(AppContext);
  const onBackdropClick = useCallback(() => {
    setShowSelectTokenModal(false);
  }, [setShowSelectTokenModal]);
  useOutsideClick(containerRef, onBackdropClick);
  return (
    <Wrapper>
      <Container ref={containerRef}>
        <TopView />
        <SearchSection />
        <CurrentSelected />
        <ListToken />
      </Container>
    </Wrapper>
  );
});

export default SelectTokenModal;
