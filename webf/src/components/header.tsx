import {useContext, useEffect} from "react";
import {AppContext} from "./ctx.tsx";

export default function HeaderComponent() {
  function showChatsList(): void {
    const a = document.getElementById('chats-component')?.classList
    try{
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      a?.contains('--hidden') ? a.remove('--hidden') : a.add('--hidden')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch (sa) { console.log(sa)}
  }

  function showCreateChat(): void {
    const a = document.getElementById('chats-create-component')?.classList
    try{
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      a?.contains('--hidden') ? a.remove('--hidden') : a.add('--hidden')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch (sa) { console.log(sa)}
  }
  
  return (
    <header>
      <span> WebChat </span>
      <nav>
        <ul>
          <li>
            <input type='button' value='Chats' onClick={showChatsList}/>
          </li>
          <li>
            <input type='button' value='Create' onClick={showCreateChat}/>
          </li>
          <li>
            <input type='button' value='Home'/>
          </li>
          <li>
            <input type='button' value='Home'/>
          </li>
        </ul>
      </nav>
    </header>
  );
}