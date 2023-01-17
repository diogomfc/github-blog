import { useContext } from 'react'
import { GithubBlogContext } from '../contexts/GithubBlogProvider'

export function useBlog() {
  const context = useContext(GithubBlogContext)
  return context
}
