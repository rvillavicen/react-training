import React, { PureComponent } from 'react'
import SearchBar from '../../components/SearchBar'
import { MessagesContainer, MessageList } from './styled'
import PreviewMessage from '../../components/PreviewMessage'
import messages from '../../data/messages.json'

class Messages extends PureComponent {
  state = {
    messages
  }

  handleOnClick = id => {
    const messages = [...this.state.messages]
    const updatedState = messages.map(m => {
      if(m.id === id){
        m.read = true
      }
      return m
    })

    this.setState({
      messages: updatedState
    })
  }

  render() {
    return (
      <MessagesContainer>
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <SearchBar />
        </div>
        
        <MessageList>
        {
          messages.map(message => {
            return (
              <PreviewMessage 
                key={message.id}
                senderName={message.sender_name}
                timestamp={message.sent_timestamp}
                subject={message.subject}
                body={message.body}
                isRead={message.read}
                hasAttachments={message.hasAttachments}
                onClick={() => this.handleOnClick(message.id)}
              />
            )
          })
        }
        </MessageList>
      </MessagesContainer>
    )
  }
}

export default Messages