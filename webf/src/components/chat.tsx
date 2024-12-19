export default function ChatComponent() {
  const sendMessage = (ev): void => {
    if (ev.key === "Enter") {
      alert('message sent')
    }
  }

  return(
    <div className='chat-block'>
      <div className='chat-content'>
        <div className='chat-message'>
          <div className='chat-message-creator'></div>
          <div className='chat-message-baloon'>
            <span className='chat-message-text'>
              gsjhsolfjdsplkfjksd;lfklsd
            </span>
            <span className='chat-message-time'>
              dec 14 22:00
            </span>
          </div>
        </div>
        <div className='chat-message chat-message-opposite'>
          <div className='chat-message-creator'></div>
          <div className='chat-message-baloon'>
            <span className='chat-message-text'>
              gsjhsolfjdsplkfjksd;lfklsd
            </span>
            <span className='chat-message-time'>
              dec 14 22:00
            </span>
          </div>
        </div>
      </div>
      <div className='chat-message-create'>
        <input type='text' placeholder='message...' onKeyDown={sendMessage}/>
        <img alt={''}/>
        <div></div>
      </div>
    </div>
  )
}