import styled from 'styled-components'

export const StyledNavButton = styled.a`
  background: ${props => props.hover ? 'rgb(73,33,163)' : 'rgb(234,232,238)'};
  background: ${props => props.hover ? 'linear-gradient(0deg, rgba(73,33,163,1) 0%, rgba(110,108,143,1) 100%)' : 'linear-gradient(0deg, rgba(234,232,238,1) 0%, rgba(249,247,252,1) 4%, rgba(255,255,255,1) 100%)'};
  padding: 1rem;
  color: #666;
  font-weight: bold;
  display: flex;
  justify-items: start;
  align-items: flex-start;

  &:hover { 
    background: rgb(73,33,163);
    background: linear-gradient(0deg, rgba(73,33,163,1) 0%, rgba(110,108,143,1) 100%);
    color: #fff;
  }
`
