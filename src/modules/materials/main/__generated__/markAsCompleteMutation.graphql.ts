/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type markAsCompleteMutationVariables = {
    material_id?: number | null;
    student_id?: number | null;
};
export type markAsCompleteMutationResponse = {
    readonly update_student_material_history: {
        readonly affected_rows: number;
    } | null;
};
export type markAsCompleteMutation = {
    readonly response: markAsCompleteMutationResponse;
    readonly variables: markAsCompleteMutationVariables;
};



/*
mutation markAsCompleteMutation(
  $material_id: Int
  $student_id: Int
) {
  update_student_material_history(where: {student_id: {_eq: $student_id}, material_id: {_eq: $material_id}}, _set: {progress: 100}) {
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
    "name": "markAsCompleteMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "markAsCompleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "318e3fa9d6c0d6e534f4508788706a3d",
    "id": null,
    "metadata": {},
    "name": "markAsCompleteMutation",
    "operationKind": "mutation",
    "text": "mutation markAsCompleteMutation(\n  $material_id: Int\n  $student_id: Int\n) {\n  update_student_material_history(where: {student_id: {_eq: $student_id}, material_id: {_eq: $material_id}}, _set: {progress: 100}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a32452729c06642d1e7cace3bdd8e8f1';
export default node;
