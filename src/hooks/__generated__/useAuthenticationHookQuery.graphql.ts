/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useAuthenticationHookQueryVariables = {
    firebase_id: string;
};
export type useAuthenticationHookQueryResponse = {
    readonly student: ReadonlyArray<{
        readonly _id: number;
        readonly name: string;
        readonly last_name: string;
        readonly email: string;
        readonly class: number | null;
    }>;
};
export type useAuthenticationHookQuery = {
    readonly response: useAuthenticationHookQueryResponse;
    readonly variables: useAuthenticationHookQueryVariables;
};



/*
query useAuthenticationHookQuery(
  $firebase_id: String!
) {
  student(where: {firebase_id: {_eq: $firebase_id}}) {
    _id
    name
    last_name
    email
    class
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "firebase_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "firebase_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "student",
    "kind": "LinkedField",
    "name": "student",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "last_name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "class",
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
    "name": "useAuthenticationHookQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAuthenticationHookQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ee7f2fac545f727db6b2ea360d6457d2",
    "id": null,
    "metadata": {},
    "name": "useAuthenticationHookQuery",
    "operationKind": "query",
    "text": "query useAuthenticationHookQuery(\n  $firebase_id: String!\n) {\n  student(where: {firebase_id: {_eq: $firebase_id}}) {\n    _id\n    name\n    last_name\n    email\n    class\n  }\n}\n"
  }
};
})();
(node as any).hash = '76082271eaddb020d6b381a1d186174f';
export default node;
