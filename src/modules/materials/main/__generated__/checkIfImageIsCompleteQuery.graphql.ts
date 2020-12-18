/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type checkIfImageIsCompleteQueryVariables = {
    material_id?: number | null;
    student_id?: number | null;
};
export type checkIfImageIsCompleteQueryResponse = {
    readonly student_material_history: ReadonlyArray<{
        readonly progress: number;
    }>;
};
export type checkIfImageIsCompleteQuery = {
    readonly response: checkIfImageIsCompleteQueryResponse;
    readonly variables: checkIfImageIsCompleteQueryVariables;
};



/*
query checkIfImageIsCompleteQuery(
  $material_id: Int
  $student_id: Int
) {
  student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {
    progress
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
    "name": "student_material_history",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "checkIfImageIsCompleteQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "checkIfImageIsCompleteQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "73c8ce6ef7a1f18c60f94b9139e43e42",
    "id": null,
    "metadata": {},
    "name": "checkIfImageIsCompleteQuery",
    "operationKind": "query",
    "text": "query checkIfImageIsCompleteQuery(\n  $material_id: Int\n  $student_id: Int\n) {\n  student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {\n    progress\n  }\n}\n"
  }
};
})();
(node as any).hash = '7230c5d4c21345b1eb52463ab50184d8';
export default node;
