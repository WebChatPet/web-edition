import HeaderComponent from "./header.tsx";
import ChatsComponent from "./chats.tsx";
import ChatComponent from "./chat.tsx";
import CreateChatComponent from "./create-chat.tsx";
import {useContext, useEffect} from "react";
import {AppContext} from "./ctx.tsx";
import {getCookie} from "../utils.ts";

export default function Layout(){
  const { userData } = useContext(AppContext);

  useEffect(() => {
    if (userData === null && typeof getCookie('user-id') === "undefined") {
      window.location.replace('/user-create')
    }
  }, []);

  return(
    <>
      <HeaderComponent />
      <div className='center-block'>
        <ChatsComponent />
        <CreateChatComponent />
        <ChatComponent />
      </div>
    </>
  );
}