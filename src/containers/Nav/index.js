import React from 'react'
import folders from '../../data/folders'
import NavButton from '../../components/NavButton'
import { NavContainer } from './styled'

const NavView = () => {
  return(
    <NavContainer>
      {
        folders.map(folder => {
          return <NavButton key={`folder_${folder.label}`} label={folder.label} icon={folder.icon}/>
        })
      }
    </NavContainer>
  )
}

export default NavView
