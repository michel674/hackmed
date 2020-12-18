import { createContext, Dispatch } from "react";
import { useAuthenticationHookQueryResponse } from "../../hooks/__generated__/useAuthenticationHookQuery.graphql";
import { User } from "./auth.provider";

export interface AuthContext {
  authState: { status: string; firebaseUser?: any; token?: string };
  getUserIdAndInfoFromStorage: () => {
    id: number;
    userClass: number;
    user: User;
  };
  isUserStored: boolean;
  login: (email, password) => Promise<firebase.default.auth.UserCredential>;
  logout: () => void;
  setAuthState: Dispatch<React.SetStateAction<any>>;
  setStoredUser: Dispatch<React.SetStateAction<any>>;
  setIsUserStored: Dispatch<React.SetStateAction<any>>;
  signup: (email, password) => Promise<firebase.default.auth.UserCredential>;
  storedUser: useAuthenticationHookQueryResponse | undefined;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);
