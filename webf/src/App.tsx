import './styles/App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./components/layout.tsx";
import * as React from "react";
import {AppContext, AppContextProvider} from "./components/ctx.tsx";
import {IChat} from "./types/chat.ts";
import CreateUserPage from "./pages/create-user.tsx";
import {IUser} from "./types/user.ts";

function App() {
  const [chatList, setChatList] = React.useState<Array<IChat>>([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />
    },
    {
      path: '/user-create',
      element: <CreateUserPage />
    }
  ])

  return(
    <>
      <AppContext.Provider value={{ chatList, setChatList }}>
        <RouterProvider router={router}></RouterProvider>
      </AppContext.Provider>
    </>
  )
}

export default App
