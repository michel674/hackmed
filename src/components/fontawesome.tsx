import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

library.add(fab, far, fas);

export const FaIcon = {
  Alert: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="exclamation-circle" />
  ),
  AngleDown: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="angle-down" />
  ),
  AngleLeft: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="angle-left" />
  ),
  ArrowDown: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="arrow-down" />
  ),
  Ban: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="ban" />
  ),
  Check: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="check" />
  ),
  Clipboard: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="clipboard-list" />
  ),
  Clock: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="clock" />
  ),
  Close: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="times" />
  ),
  Chart: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="chart-bar" />
  ),
  Eye: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="eye" />
  ),
  File: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="file" />
  ),
  Hamburguer: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="bars" />
  ),
  Home: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="home" />
  ),
  List: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="th-list" />
  ),
  ListPosition: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="list-ol" />
  ),
  Lock: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="lock" />
  ),
  Moon: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="moon" />
  ),
  Play: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="play-circle" />
  ),
  Star: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="star" />
  ),
  Sun: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="sun" />
  ),
  Video: (props: JSX.IntrinsicAttributes): JSX.Element => (
    <FontAwesomeIcon {...props} icon="video" />
  ),
};
