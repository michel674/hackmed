/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type imageQueryVariables = {
    material_id?: number | null;
    student_id?: number | null;
};
export type imageQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly _id: number;
        readonly content: unknown | null;
        readonly student_material_histories: ReadonlyArray<{
            readonly progress: number;
        }>;
    }>;
};
export type imageQuery = {
    readonly response: imageQueryResponse;
    readonly variables: imageQueryVariables;
};



/*
query imageQuery(
  $material_id: Int
  $student_id: Int
) {
  material(where: {_id: {_eq: $material_id}}) {
    _id
    content
    student_material_histories(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {
      progress
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "material_id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "student_id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "_eq",
    "variableName": "material_id"
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": (v1/*: any*/),
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
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "fields": [
              {
                "fields": (v1/*: any*/),
                "kind": "ObjectValue",
                "name": "material_id"
              },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "imageQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "imageQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "6ef2fb091852c1e764844620860e46ce",
    "id": null,
    "metadata": {},
    "name": "imageQuery",
    "operationKind": "query",
    "text": "query imageQuery(\n  $material_id: Int\n  $student_id: Int\n) {\n  material(where: {_id: {_eq: $material_id}}) {\n    _id\n    content\n    student_material_histories(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {\n      progress\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '0d35c0c4046440a6bb2c12a7d5f84d92';
export default node;
