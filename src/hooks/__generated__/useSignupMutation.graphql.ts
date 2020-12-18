/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useSignupMutationVariables = {
    email?: string | null;
    firebase_id?: string | null;
};
export type useSignupMutationResponse = {
    readonly update_student: {
        readonly affected_rows: number;
    } | null;
};
export type useSignupMutation = {
    readonly response: useSignupMutationResponse;
    readonly variables: useSignupMutationVariables;
};



/*
mutation useSignupMutation(
  $email: String
  $firebase_id: String
) {
  update_student(where: {email: {_eq: $email}}, _set: {firebase_id: $firebase_id}) {
    affected_rows
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "firebase_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "firebase_id",
            "variableName": "firebase_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "_set"
      },
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "email"
              }
            ],
            "kind": "ObjectValue",
            "name": "email"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "student_mutation_response",
    "kind": "LinkedField",
    "name": "update_student",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affected_rows",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useSignupMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSignupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a6cdb715a107d074ef4c6808844dbc71",
    "id": null,
    "metadata": {},
    "name": "useSignupMutation",
    "operationKind": "mutation",
    "text": "mutation useSignupMutation(\n  $email: String\n  $firebase_id: String\n) {\n  update_student(where: {email: {_eq: $email}}, _set: {firebase_id: $firebase_id}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = 'aceab8ac13de754b2b7c651859e1187d';
export default node;
