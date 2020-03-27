import React from 'react'
import { StyledNavButton, SecondaryButton } from './styled'

const NavButton = ({ label, icon, route, secondary }) => {
  if(secondary){
    return (
      <SecondaryButton href={route}>
        {icon}
        <span>{label}</span>
      </SecondaryButton>
    )
  } else {
    return (
      <StyledNavButton href={route}>
        {icon}
        <span>{label}</span>
      </StyledNavButton>
    )
  }
}

export default NavButton