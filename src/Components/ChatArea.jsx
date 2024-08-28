import React from 'react'
import Message from './Message'

function ChatArea() {
  return (
    <div className='chat-area'>
        <div className='chat-header'></div>
        <div className='messages'>
            <Message text="Hey,how's it going" sent/>
            <Message text="I am good" recieved/>
        </div>
    </div>
  )
}

export default ChatArea
