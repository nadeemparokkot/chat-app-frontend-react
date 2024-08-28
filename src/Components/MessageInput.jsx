import React, { useState } from 'react'

function MessageInput() {
    const {inputValue,setInputValue}=useState('');

    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const handleSendMessage=()=>{
        console.log("MESSAGE SEND")
    }
    return (
        <div className='message-input'>
            <textarea
                placeholder='Type your message'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    )
}

export default MessageInput
