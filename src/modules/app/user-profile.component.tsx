/* eslint-disable no-shadow */
import React from "react";
import { useHistory } from "react-router-dom";
import { App } from "../../App";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { Modal } from "../../components/modal/modal.component";
import { Separator } from "../../components/separator.style";
import { H2 } from "../../components/typography.style";
import {
  LogoutBox,
  LogoutMenuWrapper,
  UserIconStyled,
  UserNameStyled,
  UserProfileStyled,
} from "./user-profile.component.style";

export const UserProfile: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [userName, setUserName] = React.useState<string | null>(null);

  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { user } = getUserIdAndInfoFromStorage();

  const { logout } = useAuthContext();

  React.useEffect(() => {
    if (user) {
      setUserName(user.name + " " + user.last_name);
    } else {
      setUserName("");
    }
  }, [user]);

  const getInitials = (userName) => {
    if (userName !== null) {
      const nameInUpperCase = userName.toUpperCase();
      const fullNameInitials = nameInUpperCase.match(/\b[A-Z]/gm) || [];
      const initials =
        (fullNameInitials.shift() || "") + (fullNameInitials.pop() || "");
      if (initials !== []) {
        return initials;
      } else {
        return "Failed to load name";
      }
    }
  };

  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return user ? (
    <UserProfileStyled onClick={() => setMenuOpen(!menuOpen)}>
      <UserIconStyled>{getInitials(userName)}</UserIconStyled>
      <Separator type="icon" />
      <LogoutMenuWrapper>
        <UserNameStyled>{userName}</UserNameStyled>
        <LogoutBox menuOpen={menuOpen} onClick={() => setModalOpen(true)}>
          Logout
        </LogoutBox>
      </LogoutMenuWrapper>
      <Modal
        confirmation
        opened={modalOpen}
        onConfirm={handleLogout}
        onDeny={() => setModalOpen(false)}
      >
        <H2>Tem certeza que deseja sair?</H2>
      </Modal>
    </UserProfileStyled>
  ) : (
    <App />
  );
};
