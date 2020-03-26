import React from 'react'
import folders from '../../data/folders.json'
import NavButton from '../../components/NavButton'
import { NavContainer } from './styled'

const NavView = () => {
  return(
    <NavContainer>
      {
        folders.map(folder => {
          return <NavButton key={`folder_${folder.label}`} label={folder.label} />
        })
      }
    </NavContainer>
  )
}

export default NavView
