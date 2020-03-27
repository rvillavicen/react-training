import React from 'react'
import folders from '../../data/folders'
import NavButton from '../../components/NavButton'
import { NavContainer } from './styled'
import { FaPen } from 'react-icons/fa'

const NavView = () => {
  return(
    <NavContainer>
      <NavButton secondary label="Compose New" icon={<FaPen />}/>
      {
        folders.map(folder => {
          return <NavButton key={`folder_${folder.label}`} label={folder.label} icon={folder.icon}/>
        })
      }
    </NavContainer>
  )
}

export default NavView
