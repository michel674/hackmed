/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useSignupQueryVariables = {
    hash_code?: string | null;
};
export type useSignupQueryResponse = {
    readonly student: ReadonlyArray<{
        readonly email: string;
    }>;
};
export type useSignupQuery = {
    readonly response: useSignupQueryResponse;
    readonly variables: useSignupQueryVariables;
};



/*
query useSignupQuery(
  $hash_code: String
) {
  student(where: {hash_code: {_eq: $hash_code}}) {
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "hash_code"
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
                "variableName": "hash_code"
              }
            ],
            "kind": "ObjectValue",
            "name": "hash_code"
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
        "name": "email",
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
    "name": "useSignupQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useSignupQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b4e3c39be95795a011637bd7b5823e4d",
    "id": null,
    "metadata": {},
    "name": "useSignupQuery",
    "operationKind": "query",
    "text": "query useSignupQuery(\n  $hash_code: String\n) {\n  student(where: {hash_code: {_eq: $hash_code}}) {\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ff689b3dab12f651a883d674e1ef5d09';
export default node;
