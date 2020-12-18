import firebase from "firebase";
import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { useFlashMessage } from "../../app/flash-message/flash-message-provider";
import { Button } from "../../components/button.component";
import { FormStyled } from "../../components/form.component.style";
import { FrameStyled } from "../../components/frame.component.style";
import { Hbox } from "../../components/hbox-component.style";
import { Image } from "../../components/images-object.component.style";
import { Input } from "../../components/input.component";
import { LinkStyled } from "../../components/link.component.style";
import { Separator } from "../../components/separator.style";
import { Shimmer } from "../../components/shimmer-effect.component";
import { H3, WarningText } from "../../components/typography.style";
import { auth } from "../../firebase";
import { useAuthenticationHook } from "../../hooks/use-authentication-hook";
import { useSignup } from "../../hooks/use-signup";
import { CardLoginStyled } from "./login.card.component.style";
import { LoginStyled } from "./login.component.style";

interface LoginProps {
  type?: "login" | "signup";
}

export const Auth: React.FC<LoginProps> = ({ type }) => {
  const [userEmail, setUserEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [inputValue, setInputValue] = React.useState<string>("");
  const [warning, setWarning] = React.useState(false);
  const [firebaseId, setFirebaseId] = React.useState<string>("");
  const [skipInitialFetch, setSkipInitialFetch] = React.useState<boolean>(true);

  const { user } = useAuthenticationHook(firebaseId, skipInitialFetch);

  const history = useHistory();

  const {
    signup,
    authState,
    setAuthState,
    login,
    isUserStored,
    setIsUserStored,
    setStoredUser,
  } = useAuthContext();

  const { showFlashMessage } = useFlashMessage();

  const { email } = useSignup();

  const { registerIdIntoHasura } = useSignup();

  const handleChangeEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setWarning(false);
    setInputValue(event.currentTarget.value);
  };

  const handleChangePassword = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleChangeConfirmPassword = (event: FormEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    login(inputValue, password).catch((error) =>
      showFlashMessage(error.message)
    );
  };

  const handleSignupSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        signup(userEmail, password);
      } catch (error) {
        showFlashMessage(error);
      }
    } else {
      showFlashMessage("Senhas incompatíveis");
    }
  };

  React.useEffect(() => {
    if (type === "signup") {
      email && setUserEmail(email);
    }
  }, [email, type]);

  React.useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        if (type === "signup") {
          const config = {
            variables: {
              email: firebaseUser.email,
              firebase_id: firebaseUser.uid,
            },
          };

          registerIdIntoHasura(config);
        }

        let token = await firebaseUser.getIdToken();
        const idTokenResult = await firebaseUser.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims["https://hasura.io/jwt/claims"];

        if (hasuraClaim) {
          setAuthState({ status: "in", firebaseUser, token });
        } else {
          // Check if refresh is required.
          const metadataRef = firebase
            .database()
            .ref("metadata/" + firebaseUser.uid + "/refreshTime");

          metadataRef.on("value", async (data) => {
            if (!data.exists) {
              return;
            }
            // Force refresh to pick up the latest custom claims changes.
            token = await firebaseUser.getIdToken(true);
            setAuthState({ status: "in", firebaseUser, token });
            localStorage.setItem("token", token);
          });
        }
      } else {
        setAuthState({ status: "out" });
      }
    });
  }, [registerIdIntoHasura, setAuthState, type]);

  React.useEffect(() => {
    if (user) {
      setStoredUser(user);
      setIsUserStored(true);
    }
  }, [setIsUserStored, setStoredUser, user]);

  auth.onAuthStateChanged(async (firebaseUser) => {
    if (firebaseUser) {
      setFirebaseId(firebaseUser.uid);
      setSkipInitialFetch(false);
    }
  });

  if (isUserStored) {
    history.push("/");
    return null;
  }

  return (
    <LoginStyled>
      <CardLoginStyled>
        <FrameStyled type="quaternary">
          <FormStyled
            onSubmit={type === "login" ? handleSubmit : handleSignupSubmit}
          >
            <Hbox>
              <Hbox.Item hAlign="center">
                <Image.LogoLogin />
                {type === "login" ? (
                  <>
                    <Input.WithRegex
                      onChangeInput={handleChangeEmail}
                      placeholder="Email"
                      kind="email"
                      required
                    />
                    <Separator type="content" />
                    <Input.WithRegex
                      password
                      onChangeInput={handleChangePassword}
                      placeholder="Senha"
                      kind="password"
                    />
                  </>
                ) : (
                  <H3>Registre uma senha para o email {userEmail}</H3>
                )}
                {warning && <WarningText>Credenciais inválidas</WarningText>}
                <Separator type="content" />
                {type === "login" ? (
                  ""
                ) : (
                  <>
                    <Input.WithRegex
                      password
                      onChangeInput={handleChangePassword}
                      placeholder="Senha"
                      kind="password"
                    />
                    <Separator type="content" />
                    <Input.WithRegex
                      password
                      onChangeInput={handleChangeConfirmPassword}
                      placeholder="Confirmar senha"
                      kind="password"
                    />
                    <Separator type="content" />
                  </>
                )}
                {authState.status === "out" ? (
                  <Button submit>
                    {type === "login" ? "Entrar" : "Cadastrar"}
                  </Button>
                ) : (
                  <Shimmer height="20px" />
                )}
                <Separator type="content" />
              </Hbox.Item>
              <Hbox.Item hAlign="center">
                {type === "signup" ? (
                  <>
                    Já é cadastrado?
                    <Hbox>
                      <LinkStyled to="/login" ignoresTheme>
                        Entrar
                      </LinkStyled>
                    </Hbox>
                  </>
                ) : (
                  <>
                    Ainda não é cadastrado?
                    <Hbox>
                      <LinkStyled to="/signup" ignoresTheme>
                        Cadastrar
                      </LinkStyled>
                    </Hbox>
                  </>
                )}
              </Hbox.Item>
            </Hbox>
          </FormStyled>
        </FrameStyled>
      </CardLoginStyled>
    </LoginStyled>
  );
};
