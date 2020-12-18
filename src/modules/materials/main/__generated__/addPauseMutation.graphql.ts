/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type addPauseMutationVariables = {
    material_id?: number | null;
    student_id?: number | null;
    pauses?: number | null;
};
export type addPauseMutationResponse = {
    readonly update_student_material_history: {
        readonly affected_rows: number;
        readonly returning: ReadonlyArray<{
            readonly pauses: number | null;
        }>;
    } | null;
};
export type addPauseMutation = {
    readonly response: addPauseMutationResponse;
    readonly variables: addPauseMutationVariables;
};



/*
mutation addPauseMutation(
  $material_id: Int
  $student_id: Int
  $pauses: Int = 1
) {
  update_student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}, _inc: {pauses: $pauses}) {
    affected_rows
    returning {
      pauses
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
  "defaultValue": 1,
  "kind": "LocalArgument",
  "name": "pauses"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "student_id"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "pauses",
            "variableName": "pauses"
          }
        ],
        "kind": "ObjectValue",
        "name": "_inc"
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "student_material_history",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pauses",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addPauseMutation",
    "selections": (v3/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "addPauseMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "2126a15df62d88432b6eba7c8b533ed1",
    "id": null,
    "metadata": {},
    "name": "addPauseMutation",
    "operationKind": "mutation",
    "text": "mutation addPauseMutation(\n  $material_id: Int\n  $student_id: Int\n  $pauses: Int = 1\n) {\n  update_student_material_history(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}, _inc: {pauses: $pauses}) {\n    affected_rows\n    returning {\n      pauses\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '10b619e719854d6017a886f9a76d6186';
export default node;
