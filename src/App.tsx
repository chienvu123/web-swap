import React from "react";
import Header from "./components/Header";
import "./App.css";
import { AppProvider } from "./context";
function AppContainer() {
  return (
    <div className="App">
      <Header />
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
