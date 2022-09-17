import React, { useContext } from "react";
import Header from "./containers/Header/Header";
import "./App.css";
import { AppContext, AppProvider } from "./context";
import SwapContainer from "./containers/SwapContainer";
import styled from "styled-components";
import SelectTokenModal from "./components/SelectTokenModal";

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AppContainer() {
  const { showSelectTokenModal } = useContext(AppContext);
  return (
    <div className="App">
      <Header />
      <Main>
        <SwapContainer />
      </Main>
      {showSelectTokenModal && <SelectTokenModal />}
      <div id="background-radial-gradient" />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}

export default App;
