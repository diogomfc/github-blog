import { useBlog } from '../../hooks/useBlog'
import { ArrowUpIcon, BuildingIcon, GithubIcon, UserGroupIcon } from '../Icons'
import {
  AuthorSummaryContainer,
  Avatar,
  Description,
  CallToAction,
  Info,
} from './styles'

export function AuthorSummary() {
  const {
    blogState: { authorInfo },
  } = useBlog()
  return (
    <AuthorSummaryContainer>
      <Avatar>
        <img src={authorInfo?.avatar_url} alt={authorInfo?.login} />
      </Avatar>

      <Description>
        <div>
          <h2>{authorInfo?.login}</h2>
          <CallToAction
            href={authorInfo?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            github <ArrowUpIcon />
          </CallToAction>
        </div>

        <p>{authorInfo?.bio}</p>

        <Info>
          <li>
            <GithubIcon />
            <span>{authorInfo?.login}</span>
          </li>
          <li>
            <BuildingIcon />
            <span>{authorInfo?.company}</span>
          </li>
          <li>
            <UserGroupIcon />
            <span>{authorInfo?.followers} seguidores</span>
          </li>
        </Info>
      </Description>
    </AuthorSummaryContainer>
  )
}
