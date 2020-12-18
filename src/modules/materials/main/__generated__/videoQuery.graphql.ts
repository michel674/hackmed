/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type videoQueryVariables = {
    material_id?: number | null;
    student_id?: number | null;
};
export type videoQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly content: unknown | null;
        readonly student_material_histories: ReadonlyArray<{
            readonly progress: number;
        }>;
    }>;
};
export type videoQuery = {
    readonly response: videoQueryResponse;
    readonly variables: videoQueryVariables;
};



/*
query videoQuery(
  $material_id: Int
  $student_id: Int
) {
  material(where: {_id: {_eq: $material_id}}) {
    content
    student_material_histories(where: {student_id: {_eq: $student_id}}) {
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
    "name": "videoQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "videoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c9c6251b9e0080b878adb85f1dff2216",
    "id": null,
    "metadata": {},
    "name": "videoQuery",
    "operationKind": "query",
    "text": "query videoQuery(\n  $material_id: Int\n  $student_id: Int\n) {\n  material(where: {_id: {_eq: $material_id}}) {\n    content\n    student_material_histories(where: {student_id: {_eq: $student_id}}) {\n      progress\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5689c61df44e4d2714e825316c2b8e03';
export default node;
