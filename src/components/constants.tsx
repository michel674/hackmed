/* eslint-disable no-shadow */
export enum BrandColor {
  Primary = "#1FC3FF",
  Secondary = "#FFC542",
  Tertiary = "#82C43C",
  Quaternary = "#92929D",
  Black = "#000000",
  White = "#FFFFFF",
}

export enum Spacing {
  XSmall = "4px",
  Small = "12px",
  Medium = "16px",
  Large = "24px",
  XLarge = "40px",
  XXLarge = "72px",
}

export enum FontFamily {
  Primary = "Poppins",
}

export enum FontWeight {
  Medium = 600,
  Bold = "bold",
  Normal = "Regular",
  Lighter = 300,
}

export enum FontSize {
  XSmall = "0.8rem",
  Small = "1.2rem",
  Medium = "1.5rem",
  Large = "2rem",
}

export enum Radius {
  XSmall = "8px",
  Small = "10px",
  Large = "20px",
}

export enum Breakpoint {
  Mobile = "600px",
  Tablet = "768px",
  Desktop = "1060px",
  LargeDesktop = "1024px",
}

export enum Transition {
  Fast = "0.2s",
  Slow = "1s",
}

export enum FlashMessageType {
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success",
}

export const LandScapeProportion = "56%";

export enum ButtonType {
  SUBMIT = "submit",
  NORMAL = "button",
}
export enum Shadow {
  Primary = `#00000018 0px 1px 3px 0px, #00000008 0px 1px 2px 0px`,
}

export enum InputTypes {
  name = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
  email = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
  phone = "^((?+?[0-9]*)?)?[0-9_- ()]*$",
  cpf = `/^([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$/i`,
}

export enum InputMessages {
  name = "Use um nome válido",
  email = "O formato do email não está adequado",
  cpf = "CPF inválido",
  phone = "Formato de telefone inválido",
}
