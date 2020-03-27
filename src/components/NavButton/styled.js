import styled from 'styled-components'

export const StyledNavButton = styled.a`
  background: ${props => props.active ? 'rgb(242,99,152)' : 'rgb(234,232,238)'};
  background: ${props => props.active ? 'linear-gradient(0deg, rgba(242,99,152,1) 0%, rgba(252,158,190,1) 100%)' : 'linear-gradient(0deg, rgba(234,232,238,1) 0%, rgba(249,247,252,1) 4%, rgba(255,255,255,1) 100%)'};
  padding: 2rem;
  color: #666;
  font-weight: bold;
  display: flex;
  justify-items: start;
  align-items: flex-start;

  svg {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  &:hover { 
    background: rgb(242,99,152);
    background: linear-gradient(0deg, rgba(242,99,152,1) 0%, rgba(252,158,190,1) 100%);
    color: #fff;
  }
`
export const SecondaryButton = styled(StyledNavButton)`
  background: rgb(99,101,151);
  background: linear-gradient(0deg, rgba(71,69,103,1) 0%, rgba(99,101,151,1) 100%);
  color: #fff;
  
`