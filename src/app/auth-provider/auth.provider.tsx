import React, { useContext } from "react";
import { auth } from "../../firebase";
import { useAuthenticationHookQueryResponse } from "../../hooks/__generated__/useAuthenticationHookQuery.graphql";
import { AuthContext } from "./user.context";

interface LoginContainerProps {
  userValidationData?: string;
  skipValue?: boolean;
}

export interface User {
  readonly _id: number;
  readonly name: string;
  readonly last_name: string;
  readonly email: string;
  readonly class: number | null;
}

export const LOCAL_STORAGE_USER = "GenteLab-user";

export const AuthProvider: React.FC<LoginContainerProps> = ({
  children,
}): any => {
  const [storedUser, setStoredUser] = React.useState<
    useAuthenticationHookQueryResponse | undefined
  >();
  const [authState, setAuthState] = React.useState<{
    status: string;
    firebaseUser?: any;
    token?: string;
  }>({ status: "loading" });
  const [isUserStored, setIsUserStored] = React.useState<boolean>(false);

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER);
    setStoredUser(undefined);
    setIsUserStored(false);
    auth.signOut();
  };

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const getUserIdAndInfoFromStorage = () => {
    const id = Number(storedUser?.student[0]._id);

    const userClass = Number(storedUser?.student[0].class);

    const user = storedUser?.student[0] as User;

    return { id, userClass, user };
  };

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER) as string);
    setStoredUser(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storedUser,
        login,
        logout,
        getUserIdAndInfoFromStorage,
        signup,
        authState,
        setAuthState,
        setStoredUser,
        isUserStored,
        setIsUserStored,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContext => {
  const context = useContext(AuthContext);
  return context;
};
