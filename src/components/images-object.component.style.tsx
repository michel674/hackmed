/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import facebookIcon from "../assets/icons/icon-facebook.svg";
import googleIcon from "../assets/icons/icon-google.svg";
import logoLogin from "../assets/img-gente-lab-login.png";
import logo from "../assets/img-gente-lab.png";

export const Image = {
  FacebookIcon: () => {
    return <img src={facebookIcon} alt="facebookIcon" width="20px" />;
  },
  GoogleIcon: () => {
    return <img src={googleIcon} alt="googleIcon" width="20px" />;
  },
  Logo: () => {
    return <img src={logo} alt="logo" width="60px" />;
  },
  LogoLogin: () => {
    return <img src={logoLogin} alt="logoLogin" width="300px" />;
  },
};
