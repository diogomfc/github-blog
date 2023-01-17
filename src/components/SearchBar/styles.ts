import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  margin-top: 7.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
      font-weight: 700;
      font-size: 1.8rem;
      color: ${(props) => props.theme['base-title']};
    }

    > span {
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }

  form {
    width: 100%;
  }
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  padding: 1.2rem 1.6rem;
  width: 100%;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
