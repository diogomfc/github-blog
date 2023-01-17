import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-decoration: none;
  flex: 1 1 396px;
  transition: opacity 0.2s;

  @media (min-width: 768px) {
    padding: 3.2rem;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  > h2 {
    display: block;
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 2rem;
    line-height: 160%;
    max-width: 25rem;
    text-decoration: none;
    transition: color 0.2s;
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    font-weight: 400;
    font-size: 1.4rem;
  }
`

export const Content = styled.div`
  > p {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }
`
