/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type markImageAsCompleteMutationVariables = {
    material_id?: number | null;
    student_id?: number | null;
};
export type markImageAsCompleteMutationResponse = {
    readonly update_student_material_history: {
        readonly affected_rows: number;
    } | null;
};
export type markImageAsCompleteMutation = {
    readonly response: markImageAsCompleteMutationResponse;
    readonly variables: markImageAsCompleteMutationVariables;
};



/*
mutation markImageAsCompleteMutation(
  $material_id: Int
  $student_id: Int
) {
  update_student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}, _set: {progress: 100}) {
    affected_rows
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
        "kind": "Literal",
        "name": "_set",
        "value": {
          "progress": 100
        }
      },
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
    "concreteType": "student_material_history_mutation_response",
    "kind": "LinkedField",
    "name": "update_student_material_history",
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
    "name": "markImageAsCompleteMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "markImageAsCompleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5437ba08b37264e9cf6a0428a802e6e1",
    "id": null,
    "metadata": {},
    "name": "markImageAsCompleteMutation",
    "operationKind": "mutation",
    "text": "mutation markImageAsCompleteMutation(\n  $material_id: Int\n  $student_id: Int\n) {\n  update_student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}, _set: {progress: 100}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = '8fa07d233a253e8e1399f8c6e5c07b20';
export default node;
