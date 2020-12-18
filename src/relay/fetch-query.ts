import { Variables } from "react-relay";
import { GraphQLResponse, ObservableFromValue } from "relay-runtime";

const url = process.env.REACT_APP_GRAPHQL_URL as string;

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
  "x-hasura-admin-secret": "kerala",
};

// Define a function that fetches the results of a request (query/mutation/etc)
// and returns its results as a Promise:
export const fetchQuery = (
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  operation: any,
  variables: Variables
): ObservableFromValue<GraphQLResponse> => {
  const body = JSON.stringify({
    query: operation.text, // GraphQL text from input
    variables,
  });

  const response = fetch(url, {
    method: "POST",
    headers,
    body,
  }).then((res) => res.json());

  return response;
};
