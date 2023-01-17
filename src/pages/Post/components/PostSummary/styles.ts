import styled, { css } from 'styled-components'
import { Link as LinkRouterDOM } from 'react-router-dom'

export const PostSummaryContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 3.2rem;
  margin-top: -8rem;
  display: flex;
  flex-direction: column;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${(props) => props.theme['base-title']};
  }

  > div:nth-of-type(1) {
    margin-top: 2rem;
  }
`

const baseLink = css`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  font-size: 1.2rem;
  color: ${(props) => props.theme.blue};

  svg {
    width: 1.2rem;
    height: 1.2rem;

    path {
      fill: ${(props) => props.theme.blue};
    }
  }
`

export const CallToAction = styled.a`
  ${baseLink}
`

export const Link = styled(LinkRouterDOM)`
  ${baseLink}
`

export const Info = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-top: 1.8rem;

  @media (min-width: 460px) {
    gap: 2.4rem;
    margin-top: 0.8rem;
    flex-direction: row;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    height: 2rem;
    width: 2rem;

    path {
      fill: ${(props) => props.theme['base-label']};
    }
  }
`
