import {
  ArrowUpIcon,
  CalendarIcon,
  ChevronLeftIcon,
  CommentIcon,
  GithubIcon,
} from '../../../../components/Icons'
import { CallToAction, PostSummaryContainer, Link, Info } from './styles'

export function PostSummary() {
  return (
    <PostSummaryContainer>
      <nav>
        <Link to="/github-blog/">
          <ChevronLeftIcon />
          voltar
        </Link>
        <CallToAction href="/">
          ver no github <ArrowUpIcon />
        </CallToAction>
      </nav>
      <div>
        <h1>JavaScript data types and data structures</h1>
      </div>

      <Info>
        <li>
          <GithubIcon />
          <span>diogomfc</span>
        </li>
        <li>
          <CalendarIcon />
          <span>Há 1 dia</span>
        </li>
        <li>
          <CommentIcon />
          <span>5 comentários</span>
        </li>
      </Info>
    </PostSummaryContainer>
  )
}
