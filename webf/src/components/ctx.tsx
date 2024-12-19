import React, {Context, useCallback, useContext, useState} from "react";
import {IChat} from "../types/chat.ts";
import {IUser} from "../types/user.ts";

export const AppContext: Context<any> = React.createContext(null);

export const AppContextProvider = ({value,  children}) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error('no context');
  return context;
}