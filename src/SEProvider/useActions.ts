import produce from 'immer'
import { Dispatch, MutableRefObject, SetStateAction, useCallback } from 'react'

import { SEStateType } from '../types/SEStateType'

import authService from '../services/auth-service'
import { SEInternalRefType } from './SEProvider'

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
    authService.logout()

    setState((prevState) => {
      return produce(prevState, (d: { isAuthenticated: boolean }) => {
        d.isAuthenticated = false
      })
    })
  }, [setState, internalRef])

  const login = useCallback(
    (token) => {
      authService.storeToken(token)

      setState((prevState) => {
        return produce(prevState, (d: { isAuthenticated: boolean }) => {
          d.isAuthenticated = true
        })
      })
    },
    [setState, internalRef]
  )

  return {
    logout,
    login,
  }
}
