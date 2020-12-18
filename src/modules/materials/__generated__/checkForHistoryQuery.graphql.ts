/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type checkForHistoryQueryVariables = {
    student_id?: number | null;
    material_id?: number | null;
};
export type checkForHistoryQueryResponse = {
    readonly student_material_history: ReadonlyArray<{
        readonly _id: number;
    }>;
};
export type checkForHistoryQuery = {
    readonly response: checkForHistoryQueryResponse;
    readonly variables: checkForHistoryQueryVariables;
};



/*
query checkForHistoryQuery(
  $student_id: Int
  $material_id: Int
) {
  student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {
    _id
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
        "name": "_id",
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
    "name": "checkForHistoryQuery",
    "selections": (v2/*: any*/),
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
    "name": "checkForHistoryQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ac290d7d9edcc421c4a0fe9b858391eb",
    "id": null,
    "metadata": {},
    "name": "checkForHistoryQuery",
    "operationKind": "query",
    "text": "query checkForHistoryQuery(\n  $student_id: Int\n  $material_id: Int\n) {\n  student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {\n    _id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c28fd0ed6c3df0c5653e56b1957030ee';
export default node;
