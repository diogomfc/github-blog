import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubBlogProvider } from './contexts/GithubBlogProvider'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubBlogProvider>
          <Router />
        </GithubBlogProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
