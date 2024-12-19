import {useContext, useEffect, useRef} from "react";
import {ChatApi} from "../api/chat.ts";
import {AppContext, useAppContext} from "./ctx.tsx";
import {IChat} from "../types/chat.ts";

export default function CreateChatComponent() {
  const { setChatList } = useAppContext();
  const api: ChatApi = new ChatApi();
  const name = useRef(null),
    shortname = useRef(null);

  const createChat = () => {
    api.createChat({
      name: name.current.value,
      shortname: shortname.current.value,
    }, function (response: IChat): void {
      setChatList((prevState: IChat[]) => [...prevState, response])
    })
  }

  return(
    <>
      <div id={'chats-create-component'} className='chats-create-component --hidden'>
        <form style={{ maxWidth: 340 }}>
          <h4> Create new chat </h4>
          <input type='text' placeholder='Chat name' ref={name}/>
          <input type='text' placeholder='Chat shortname' ref={shortname}/>
          <input type='button' value='Create' onClick={createChat}/>
        </form>
      </div>
    </>
  )
}