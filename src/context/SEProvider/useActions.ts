import produce from 'immer'
import { Dispatch, MutableRefObject, SetStateAction, useCallback } from 'react'

import { SEInternalRefType, SEStateType } from '../../types/SEStateType'

import authService from '../../services/auth-service'

declare global {
  interface Window {
    webkit: any
  }
}

type Props = {
  setState: Dispatch<SetStateAction<SEStateType>>
  internalRef: MutableRefObject<SEInternalRefType>
  state: SEStateType
}

export interface AddImageOptions {
  select?: boolean
  shopImageId?: number
}

export default function useActions(props: Props) {
  const { internalRef, setState } = props

  const logout = useCallback(() => {
    authService.logout();

    setState((prevState) => {
      return produce(prevState, (d: { isAuthenticated: boolean }) => {
        d.isAuthenticated = false
      })
    })
  }, [setState])

  const login = useCallback(
    (token: any) => {
      authService.storeToken(token)

      setState((prevState) => {
        return produce(prevState, (d: { isAuthenticated: boolean }) => {
          d.isAuthenticated = true
        })
      })
    },
    [setState]
  );

  return {
    logout,
    login,
  }
}
