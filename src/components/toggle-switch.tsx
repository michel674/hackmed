import React from "react";
import { FaIcon } from "./fontawesome";
import {
  ToggleSwitchWrapperStyled,
  ToggleSwitchButton,
} from "./toggle-switch-style";

export const ToggleSwitch: React.FC = () => {
  const [state, setState] = React.useState<boolean>(true);
  return (
    <ToggleSwitchWrapperStyled onClick={() => setState(!state)}>
      <ToggleSwitchButton state={state}>
        {state ? <FaIcon.Sun /> : <FaIcon.Moon />}
      </ToggleSwitchButton>
    </ToggleSwitchWrapperStyled>
  );
};
