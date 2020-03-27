import React from 'react'
import { MessageContainer, MessageHeader, MessageBody, AttachmentIcon } from './styled'
import { FaPaperclip } from 'react-icons/fa'
const PreviewMessage = ({ id, senderName, timestamp, subject, body, isRead, hasAttachments, onClick }) => {
  const truncateString = s => {
    return s.substring(0, 140)
  }

  return(
    <MessageContainer key={id} isRead={isRead} onClick={onClick}>
      <MessageHeader isRead={isRead}>
        <div>{`${senderName} - ${subject}`}</div>
        <div>{timestamp}</div>
      </MessageHeader>
      <MessageBody>
        <AttachmentIcon hasAttachments={hasAttachments}><FaPaperclip /></AttachmentIcon>
        <div style={{ width: 415 }}>{truncateString(body)}</div>
      </MessageBody>
    </MessageContainer>
  )
}

export default PreviewMessage