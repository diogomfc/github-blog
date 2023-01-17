import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/github-blog/" element={<DefaultLayout />}>
        <Route path="/github-blog/" element={<Home />} />
        <Route path="/github-blog/post/:slug" element={<Post />} />
      </Route>
    </Routes>
  )
}
