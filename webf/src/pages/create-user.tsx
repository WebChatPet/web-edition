import {useContext, useRef} from "react";
import {UserApi} from "../api/chat.ts";
import {AppContext, useAppContext} from "../components/ctx.tsx";
import {IUser} from "../types/user.ts";
import {useNavigate} from "react-router-dom";

export default function CreateUserPage(){
  const {setUserData} = useAppContext();
  const name = useRef(null);
  const shortname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const password1 = useRef(null);
  const api = new UserApi();
  const nav = useNavigate();
  
  const register = () => {
    api.createUser({
      name: name.current.value,
      shortname: shortname.current.value,
      email: email.current.value,
      password: password.current.value,
    }, function (response: IUser): void {
      if (response){
        document.cookie=`user-id=${response.userid} path=/;`
        setTimeout(() =>
          window.location.replace('/'),1000);
      }
    });
  }
  
  return(
    <>
      <h2> Create new account </h2>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <input type='text' placeholder='Chat name' ref={name}/>
        <input type='text' placeholder='shortname' ref={shortname}/>
        <input type='text' placeholder='email' ref={email}/>
        <input type='text' placeholder='password' ref={password}/>
        <input type='text' placeholder='password1' ref={password1}/>
        <input type='button' value='Apply' onClick={register}/>
      </form>
    </>
  );
}