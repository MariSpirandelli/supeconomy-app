import React, {
  createContext,
  MutableRefObject,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import authService from "../services/auth-service";
import { SEStateType } from "../types/SEStateType";
import { SEType } from "../types/SEType";
import useActions from "./useActions";

declare global {
  interface Window {
    gfx: any;
  }
}

export const SEContext = createContext<SEType | null>(null);

type Props = {
  seRef?: MutableRefObject<SEType | undefined>;
};

export const useSE = (): SEType => {
  const se = useContext(SEContext);
  if (!se) {
    throw Error("Somewhere you are using se outside of SEProvider");
  }
  return se;
};

export interface SEInternalRefType {
  state: SEStateType;
}

const SEProvider: React.FC<Props> = (props) => {
  const { children, seRef } = props;

  const [state, setState] = useState<SEStateType>(
    (): SEStateType => {
      return {
        isAuthenticated: authService.isValid,

        /* isLoading: true,
        isAsyncLoading: false,

        isSyncing: false,

        isSupportedBrowser: true,

        activeMenu: null,

        productId: null, */
      };
    }
  );

  /* const isLoading =
  useEffect(() => {
    setState((state) => ({
      ...state,
      isLoading,
    }))
  }, [isLoading]) // In GFXCanvas we update meta.isLoading for each section

  const buttonsDisabled = isLoading || state.isAsyncLoading
  useEffect(() => {
    setState((state) => ({
      ...state,
      buttonsDisabled,
    }))
  }, [buttonsDisabled]) */

  const internalRef = useRef<SEInternalRefType>({
    state,
  });

  // internalRef should always have latest state
  internalRef.current.state = state;

  const actions = useActions({
    internalRef,
    setState,
    state,
  });

  /**
   * This creates the se object!!
   */
  const se = useMemo<SEType>(() => {
    const se: SEType = {
      state,
      setState,
      actions,
    };

    if (seRef) {
      seRef.current = se;
    }

    return se;
  }, [state, setState, seRef, actions]);

  return <SEContext.Provider value={se}>{children}</SEContext.Provider>;
};

export default SEProvider;
