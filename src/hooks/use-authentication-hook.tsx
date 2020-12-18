import graphql from "babel-plugin-relay/macro";
import React from "react";
import {
  LOCAL_STORAGE_USER,
  useAuthContext,
} from "../app/auth-provider/auth.provider";
import { useQueryHook } from "../relay";
import { useAuthenticationHookQuery } from "./__generated__/useAuthenticationHookQuery.graphql";

export const query = graphql`
  query useAuthenticationHookQuery($firebase_id: String!) {
    student(where: { firebase_id: { _eq: $firebase_id } }) {
      _id
      name
      last_name
      email
      class
    }
  }
`;

export const useAuthenticationHook = (
  firebase_id: string,
  skip?: boolean
): any => {
  const { setStoredUser } = useAuthContext();

  const queryVariables = {
    firebase_id,
  };
  const { data: user, retry, err: queryErrors } = useQueryHook<
    useAuthenticationHookQuery
  >(query, queryVariables, { skip });

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!skip) {
      setLoading(true);
      if (user && user.student.length > 0) {
        localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));

        setLoading(false);
      }
      if (user?.student.length === 0 || queryErrors) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [queryErrors, setStoredUser, skip, user]);

  return { user, retry, loading };
};
