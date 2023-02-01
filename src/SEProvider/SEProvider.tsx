import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import authService from '../services/auth-service';
import { SEInternalRefType, SEStateType } from '../types/SEStateType';
import { SEType } from '../types/SEType';
import useActions from './useActions';

export const SEContext = createContext<SEType | null>(null);

function useSE(): SEType {
  const se = useContext(SEContext);
  if (!se) {
    throw Error('Somewhere you are using se outside of SEProvider');
  }
  return se;
}

function SEProvider(props: { children: ReactNode }) {
  const [state, setState] = useState<SEStateType>({
    isAuthenticated: authService.isValid,

    /* isLoading: true,
        isAsyncLoading: false,

        isSyncing: false,

        isSupportedBrowser: true,

        activeMenu: null,

        productId: null, */
  });

  /* const isLoading =
  useEffect(() => {
    setState((state) => ({
      ...state,
      isLoading,
    }))
  }, [isLoading])

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

    return se;
  }, [state, setState, actions]);

  return <SEContext.Provider value={se}>{props.children}</SEContext.Provider>;
}

export { SEProvider, useSE };
