import React from "react";
import { Placeholder } from "../error/error-placeholder.component";
import { Loader } from "../loader.component";

export interface LoadingStateProps {
  error: string | null;
  loading: boolean;
  children: Element[] | Element | JSX.Element[] | JSX.Element | undefined;
  data: any;
  retry?: () => void;
  shimmer: Element | JSX.Element | React.FC;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  children,
  shimmer,
  error,
  loading,
  data,
}): any => {
  if (loading && data) {
    return (
      <>
        <Loader />
        {children}
      </>
    );
  }

  if (data) {
    return data[Object.keys(data)[0]].length > 0 ? (
      children
    ) : (
      <Placeholder type="empty" />
    );
  }

  if (loading) {
    return shimmer;
  }

  return error ? <Placeholder type="error" /> : <Placeholder type="empty" />;
};
