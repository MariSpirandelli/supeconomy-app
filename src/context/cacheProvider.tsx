import React, { ReactNode } from "react";

const CacheContext = React.createContext({} as any);

type Props = {
  children: ReactNode;
};

type Cache = {
  [url: string]: any;
};

function CacheProvider(props: Props) {
  const cache = React.useRef<Cache>({});

  return (
    <CacheContext.Provider value={cache}>
      {props.children}
    </CacheContext.Provider>
  );
}

const useCache = () => React.useContext(CacheContext);

export { CacheProvider, useCache };
