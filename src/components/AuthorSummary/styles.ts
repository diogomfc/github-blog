import styled from 'styled-components'

export const AuthorSummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3.2rem 2.5rem;
  gap: 3.2rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -8rem;

  @media (min-width: 768px) {
    padding: 3.2rem 4rem;
  }
`

export const Avatar = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 14.8rem;
  height: 14.8rem;
  flex-shrink: 0;
  margin: 0 auto;
`

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.12rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 0.8rem;
  }
`

export const CallToAction = styled.a`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${(props) => props.theme.blue};
  text-decoration: none;

  > svg {
    width: 1.2rem;
    height: 1.2rem;

    path {
      fill: ${(props) => props.theme.blue};
    }
  }
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
