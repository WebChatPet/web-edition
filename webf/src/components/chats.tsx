import * as React from 'react';
import {AppContext, useAppContext} from "./ctx.tsx";
import {JSX, useContext, useEffect} from "react";
import {IChat} from "../types/chat.ts";
import {ChatApi} from "../api/chat.ts";

export default function ChatsComponent() {
  const {chatList} = useAppContext();

  return (
    <>
      <div id={'chats-component'} className='chats-component --hidden'>
        {chatList.map((v,i) => (
          <article className='chats-component-element' key={i}>
            <img alt={''}/>
            <span className='title'> Чат хорошего настроения </span>
          </article>
        ))}
      </div>
    </>
  )
}