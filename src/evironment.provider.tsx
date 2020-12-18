import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import { Environment } from "./relay";

interface EnvironmentProps {
  children: React.ReactNode;
}

export const EnvironmentProvider: React.FC<EnvironmentProps> = ({
  children,
}: EnvironmentProps) => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      {children}
    </RelayEnvironmentProvider>
  );
};
