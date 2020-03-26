import React from 'react'
import { MessageContainer, MessageHeader, MessageBody } from './styled'

const PreviewMessage = ({ id, senderName, timestamp, subject, body, isRead, hasAttachments, onClick }) => {
  const truncateString = s => {
    return s.substring(0, 300)
  }

  return(
    <MessageContainer key={id} isRead={isRead} onClick={onClick}>
      <MessageHeader>
        <div>{`${senderName} - ${subject}`}</div>
        <div>{timestamp}</div>
      </MessageHeader>
      <MessageBody>
        {hasAttachments && <span>A</span>}
        {truncateString(body)}
      </MessageBody>
    </MessageContainer>
  )
}

export default PreviewMessage