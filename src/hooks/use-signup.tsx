import graphql from "babel-plugin-relay/macro";
import React from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "relay-hooks";
import { useQueryHook } from "../relay";
import { useSignupQuery } from "./__generated__/useSignupQuery.graphql";

interface UseSignUp {
  email: string;
  registerIdIntoHasura: (config) => void;
}

export function useSignup(): UseSignUp {
  const params = useParams();
  const hash_code = String(Object.values(params)[0]);

  const queryVariables = {
    hash_code,
  };

  const query = graphql`
    query useSignupQuery($hash_code: String) {
      student(where: { hash_code: { _eq: $hash_code } }) {
        email
      }
    }
  `;

  const registerFirebaseIdMutation = graphql`
    mutation useSignupMutation($email: String, $firebase_id: String) {
      update_student(
        where: { email: { _eq: $email } }
        _set: { firebase_id: $firebase_id }
      ) {
        affected_rows
      }
    }
  `;

  const { data, err, retry } = useQueryHook<useSignupQuery>(
    query,
    queryVariables
  );

  const [email, setEmail] = React.useState<string>("buscando...");

  const [registerIdIntoHasura] = useMutation(registerFirebaseIdMutation);

  React.useEffect(() => {
    if (data && data?.student.length > 0) {
      setEmail(data?.student[0].email as string);
    } else {
      setEmail("");
    }
    if (err) {
      console.log(err);
    }
  }, [data, email, err]);

  return { email, registerIdIntoHasura };
}
