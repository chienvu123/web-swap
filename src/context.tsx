import React, { createContext, memo, PropsWithChildren, useState } from "react";
import listNetworks, { INetworkType } from "./constants/listNetwork";

interface IAppContext {
  currentNetwork: INetworkType;
  setCurrentNetwork: (network: INetworkType) => void;
}

export const AppContext = createContext<IAppContext>({
  currentNetwork: listNetworks[0],
  setCurrentNetwork: () => {},
});

export const AppProvider = memo(({ children }: PropsWithChildren<{}>) => {
  const [currentNetwork, setCurrentNetwork] = useState(listNetworks[0]);

  return (
    <AppContext.Provider
      value={{
        currentNetwork,
        setCurrentNetwork,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
