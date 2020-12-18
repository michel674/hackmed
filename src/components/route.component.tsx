import React from "react";
import {
  RouteProps as ReactRouteProps,
  RouteComponentProps,
} from "react-router";
import { Redirect, Route as ReactRoute } from "react-router-dom";

export type RouteGuard = () => boolean;

export interface RouteProps extends ReactRouteProps {
  useGuard?: RouteGuard;
  redirectPath?: string;
}

export const Route: React.FC<RouteProps> = (props) => {
  const authorized = props.useGuard ? props.useGuard() : true;
  const WrappedComponent: any = props.component;

  const handleRender = (innerProps: RouteComponentProps) => {
    if (authorized) {
      return <WrappedComponent {...innerProps} />;
    }
    return <Redirect to="/login" />;
  };

  const { path, component, useGuard, ...other } = props;
  return <ReactRoute path={path} render={handleRender} {...other} />;
};
