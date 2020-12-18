/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type updateProgressIntoDbMutationVariables = {
    student_id?: number | null;
    material_id?: number | null;
    progress?: number | null;
};
export type updateProgressIntoDbMutationResponse = {
    readonly update_student_material_history: {
        readonly affected_rows: number;
    } | null;
};
export type updateProgressIntoDbMutation = {
    readonly response: updateProgressIntoDbMutationResponse;
    readonly variables: updateProgressIntoDbMutationVariables;
};



/*
mutation updateProgressIntoDbMutation(
  $student_id: Int
  $material_id: Int
  $progress: Int
) {
  update_student_material_history(where: {student_id: {_eq: $student_id}, material_id: {_eq: $material_id}}, _set: {progress: $progress}) {
    affected_rows
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
  "name": "progress"
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
            "name": "progress",
            "variableName": "progress"
          }
        ],
        "kind": "ObjectValue",
        "name": "_set"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateProgressIntoDbMutation",
    "selections": (v3/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "updateProgressIntoDbMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "abad8928867e8d1615a555069144a11e",
    "id": null,
    "metadata": {},
    "name": "updateProgressIntoDbMutation",
    "operationKind": "mutation",
    "text": "mutation updateProgressIntoDbMutation(\n  $student_id: Int\n  $material_id: Int\n  $progress: Int\n) {\n  update_student_material_history(where: {student_id: {_eq: $student_id}, material_id: {_eq: $material_id}}, _set: {progress: $progress}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = '7e92506bc5e180df0b8095da4bd265ac';
export default node;
