import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 128px;
  width: 100%;
  font-weight: ${props => props.isRead ? 'normal' : 'bold'};
  background-color: ${props => props.isRead ? '#fff' : '#fafafa'};
  overflow: hidden;
  border: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: rgba(99,101,151, 0.1);
    border-color: rgb(99,101,151);
  }
`

export const Violator = styled.div`
  width: 50px;
`

export const MessageHeader = styled.div`
  display: flex;
  margin-bottom: 1.3rem;
  padding-left: 1rem;
  justify-content: space-between;
  padding-right: 10px;

  &:before {
    visibility: ${props => props.isRead ? 'hidden' : 'visible'};
    position: absolute;
		margin: -40px;
    padding: 25px;
		transform: rotate(45deg);
		background: linear-gradient(0deg, rgba(71,69,103,1) 0%, rgba(99,101,151,1) 100%);
    content: '⋆';
    color: #fff;
  }

  div {
    padding-left: 59px;
    padding-top: 10px;
  }
`

export const MessageBody = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 35px;
  padding-bottom: 20px;
  color: #B5B5B5;
  font-weight: normal;
`

export const AttachmentIcon = styled.div`
  visibility: ${props => props.hasAttachments ? 'visible' : 'hidden'};
  width: 75px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  color: #B5B5B5;
  font-size: 1rem;
  margin-right: 5px;
`