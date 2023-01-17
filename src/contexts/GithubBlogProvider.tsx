import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { initializeAction } from '../reducers/blog/actions'
import {
  blogReducer,
  IBlogState,
  initializerState,
} from '../reducers/blog/reducer'

interface GithubBlogContextType {
  blogState: IBlogState
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

interface GithubBlogProviderProps {
  children: ReactNode
}

export function GithubBlogProvider({ children }: GithubBlogProviderProps) {
  const [blogState, dispatch] = useReducer(blogReducer, {} as IBlogState)

  // Inicializa o estado global da aplicação
  useEffect(() => {
    initializerState().then((initialState) => {
      dispatch(initializeAction(initialState))
    })
  }, [])

  return (
    <GithubBlogContext.Provider
      value={{
        blogState,
      }}
    >
      {children}
    </GithubBlogContext.Provider>
  )
}
