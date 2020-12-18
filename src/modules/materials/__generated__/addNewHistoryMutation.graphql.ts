/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type addNewHistoryMutationVariables = {
    material_id: number;
    student_id?: number | null;
};
export type addNewHistoryMutationResponse = {
    readonly insert_student_material_history_one: {
        readonly material_id: number | null;
        readonly student_id: number;
    } | null;
};
export type addNewHistoryMutation = {
    readonly response: addNewHistoryMutationResponse;
    readonly variables: addNewHistoryMutationVariables;
};



/*
mutation addNewHistoryMutation(
  $material_id: Int!
  $student_id: Int
) {
  insert_student_material_history_one(object: {material_id: $material_id, student_id: $student_id}) {
    material_id
    student_id
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
            "kind": "Variable",
            "name": "material_id",
            "variableName": "material_id"
          },
          {
            "kind": "Variable",
            "name": "student_id",
            "variableName": "student_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "object"
      }
    ],
    "concreteType": "student_material_history",
    "kind": "LinkedField",
    "name": "insert_student_material_history_one",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "material_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "student_id",
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
    "name": "addNewHistoryMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addNewHistoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "61aaf9d46b41f3b1ec944b9b8a5d36e2",
    "id": null,
    "metadata": {},
    "name": "addNewHistoryMutation",
    "operationKind": "mutation",
    "text": "mutation addNewHistoryMutation(\n  $material_id: Int!\n  $student_id: Int\n) {\n  insert_student_material_history_one(object: {material_id: $material_id, student_id: $student_id}) {\n    material_id\n    student_id\n  }\n}\n"
  }
};
})();
(node as any).hash = '31b2fb0d34ec7522d56d8a431003bca0';
export default node;
