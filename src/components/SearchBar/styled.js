import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5.5rem;
  align-items: stretch;
  position: relative;
`

export const SearchBarInput = styled.input`
  background-color: #fff;
  padding: 1rem 2rem;
  padding-left: 3.2rem;
  width: 100%;
  border: 2px solid #eee;
  font-size: 1.2rem;
  
  &::placeholder {
    font-size: 1.2rem;
    font-weight: bold;
    color: #aaa;
  }
`

export const SearchIcon = styled.span`
  position: absolute;
  font-size: 2rem;
  top: calc(50% - 1.5rem);
  left: 15px;
`