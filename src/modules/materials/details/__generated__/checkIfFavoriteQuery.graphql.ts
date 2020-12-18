/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type checkIfFavoriteQueryVariables = {
    student_id?: number | null;
    material_id?: number | null;
};
export type checkIfFavoriteQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly student_material_favorites: ReadonlyArray<{
            readonly _id: number;
        }>;
        readonly student_material_favorites_aggregate: {
            readonly nodes: ReadonlyArray<{
                readonly _id: number;
            }>;
        };
    }>;
};
export type checkIfFavoriteQuery = {
    readonly response: checkIfFavoriteQueryResponse;
    readonly variables: checkIfFavoriteQueryVariables;
};



/*
query checkIfFavoriteQuery(
  $student_id: Int
  $material_id: Int
) {
  material(where: {_id: {_eq: $material_id}}) {
    student_material_favorites(where: {student_id: {_eq: $student_id}}) {
      _id
    }
    student_material_favorites_aggregate {
      nodes {
        _id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "material_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "student_id"
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "_id",
    "storageKey": null
  }
],
v3 = [
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
                "variableName": "material_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "material",
    "kind": "LinkedField",
    "name": "material",
    "plural": true,
    "selections": [
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
                    "variableName": "student_id"
                  }
                ],
                "kind": "ObjectValue",
                "name": "student_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "student_material_favorite",
        "kind": "LinkedField",
        "name": "student_material_favorites",
        "plural": true,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "student_material_favorite_aggregate",
        "kind": "LinkedField",
        "name": "student_material_favorites_aggregate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "student_material_favorite",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": (v2/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "checkIfFavoriteQuery",
    "selections": (v3/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "checkIfFavoriteQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "9f8302a9fbcba017fb8761f485f5fdbe",
    "id": null,
    "metadata": {},
    "name": "checkIfFavoriteQuery",
    "operationKind": "query",
    "text": "query checkIfFavoriteQuery(\n  $student_id: Int\n  $material_id: Int\n) {\n  material(where: {_id: {_eq: $material_id}}) {\n    student_material_favorites(where: {student_id: {_eq: $student_id}}) {\n      _id\n    }\n    student_material_favorites_aggregate {\n      nodes {\n        _id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '064fcb8722ce0c688b56fbe52d918b11';
export default node;
