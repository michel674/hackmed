/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type authContextQueryVariables = {
    userEmail: string;
};
export type authContextQueryResponse = {
    readonly student: ReadonlyArray<{
        readonly name: string;
        readonly email: string;
        readonly student_material_histories: ReadonlyArray<{
            readonly progress: number;
            readonly material_id: number | null;
        }>;
        readonly student_material_favorites: ReadonlyArray<{
            readonly material_id: number;
        }>;
    }>;
};
export type authContextQuery = {
    readonly response: authContextQueryResponse;
    readonly variables: authContextQueryVariables;
};



/*
query authContextQuery(
  $userEmail: String!
) {
  student(where: {email: {_eq: $userEmail}}) {
    name
    email
    student_material_histories {
      progress
      material_id
    }
    student_material_favorites {
      material_id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userEmail"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "material_id",
  "storageKey": null
},
v2 = [
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
                "variableName": "userEmail"
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
    "concreteType": "student",
    "kind": "LinkedField",
    "name": "student",
    "plural": true,
    "selections": [
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "student_material_history",
        "kind": "LinkedField",
        "name": "student_material_histories",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "progress",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "student_material_favorite",
        "kind": "LinkedField",
        "name": "student_material_favorites",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
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
    "name": "authContextQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "authContextQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bfca1245283b06660f83225f535449ff",
    "id": null,
    "metadata": {},
    "name": "authContextQuery",
    "operationKind": "query",
    "text": "query authContextQuery(\n  $userEmail: String!\n) {\n  student(where: {email: {_eq: $userEmail}}) {\n    name\n    email\n    student_material_histories {\n      progress\n      material_id\n    }\n    student_material_favorites {\n      material_id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0dcc57dfc0d4be897512fda95fd2ee2c';
export default node;
