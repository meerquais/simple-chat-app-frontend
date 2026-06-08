import React from 'react'

function Message({msg}) {
  return (
    <div style={{padding:"10px"}}>
        <b>{msg.sender}:</b> {msg.text}
    </div>
  )
}

export default Message