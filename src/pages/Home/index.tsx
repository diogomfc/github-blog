import { AuthorSummary } from '../../components/AuthorSummary'
import { PostCard } from '../../components/PostCard'
import { SearchBar } from '../../components/SearchBar'
import { HomeContainer, PostList } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <AuthorSummary />
      <SearchBar />
      <PostList>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostList>
    </HomeContainer>
  )
}
