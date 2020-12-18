/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type updateQuizHistoryMutationVariables = {
    quiz_score?: unknown | null;
    material_id?: number | null;
    student_id?: number | null;
};
export type updateQuizHistoryMutationResponse = {
    readonly update_student_material_history: {
        readonly affected_rows: number;
    } | null;
};
export type updateQuizHistoryMutation = {
    readonly response: updateQuizHistoryMutationResponse;
    readonly variables: updateQuizHistoryMutationVariables;
};



/*
mutation updateQuizHistoryMutation(
  $quiz_score: numeric
  $material_id: Int
  $student_id: Int
) {
  update_student_material_history(where: {student_id: {_eq: $student_id}, material: {_id: {_eq: $material_id}}}, _set: {progress: 100, quiz_score: $quiz_score}) {
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
  "name": "quiz_score"
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
            "kind": "Literal",
            "name": "progress",
            "value": 100
          },
          {
            "kind": "Variable",
            "name": "quiz_score",
            "variableName": "quiz_score"
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
            "name": "material"
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
    "name": "updateQuizHistoryMutation",
    "selections": (v3/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "updateQuizHistoryMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "846ab9e8de0e2f0c0a5b8a0bd9720732",
    "id": null,
    "metadata": {},
    "name": "updateQuizHistoryMutation",
    "operationKind": "mutation",
    "text": "mutation updateQuizHistoryMutation(\n  $quiz_score: numeric\n  $material_id: Int\n  $student_id: Int\n) {\n  update_student_material_history(where: {student_id: {_eq: $student_id}, material: {_id: {_eq: $material_id}}}, _set: {progress: 100, quiz_score: $quiz_score}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = '37155d0c5b2a90f5427e234c58193400';
export default node;
