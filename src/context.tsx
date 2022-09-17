import React, { createContext, memo, PropsWithChildren, useState } from "react";
import listNetworks, { INetworkType } from "./constants/listNetwork";

interface IAppContext {
  currentNetwork: INetworkType;
  setCurrentNetwork: (network: INetworkType) => void;
  setShowSelectTokenModal: (v: boolean) => void;
  showSelectTokenModal: boolean;
}

export const AppContext = createContext<IAppContext>({
  currentNetwork: listNetworks[0],
  setCurrentNetwork: () => {},
  showSelectTokenModal: false,
  setShowSelectTokenModal: () => {},
});

export const AppProvider = memo(({ children }: PropsWithChildren<{}>) => {
  const [currentNetwork, setCurrentNetwork] = useState(listNetworks[0]);
  const [showSelectTokenModal, setShowSelectTokenModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentNetwork,
        setCurrentNetwork,
        showSelectTokenModal,
        setShowSelectTokenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
