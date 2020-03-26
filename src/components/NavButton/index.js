import React from 'react'
import { StyledNavButton } from './styled'

const NavButton = ({ label, icon, route }) => {
  return (
    <StyledNavButton href={route}>
      {icon}
      <span>{label}</span>
    </StyledNavButton>
  )
}

export default NavButton