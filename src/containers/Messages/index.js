import React from 'react'
import SearchBar from '../../components/SearchBar'
import { MessagesContainer } from './styled'

const Messages = () => {
  return (
    <MessagesContainer>
      <SearchBar />
    </MessagesContainer>
  )
}

export default Messages