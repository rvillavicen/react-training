import React from 'react'
import { StyledNavButton } from './styled'

const NavButton = ({ label, Icon, route }) => {
  return (
    <StyledNavButton href={route}>
      <span>{label}</span>
    </StyledNavButton>
  )
}

export default NavButton