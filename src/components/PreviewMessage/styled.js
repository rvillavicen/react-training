import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 5rem;
  width: 100%;
  font-weight: ${props => props.isRead ? 'normal' : 'bold'};
  background-color: ${props => props.isRead ? '#fafafa' : '#fff'};
`

export const MessageHeader = styled.div`
  display: flex;
  margin-bottom: 1.3rem;
  padding-left: 1rem;
`

export const MessageBody = styled.div`
  display: flex;
`