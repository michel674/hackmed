/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type favoriteLearningUnitMutationVariables = {
    material_id: number;
    student_id: number;
};
export type favoriteLearningUnitMutationResponse = {
    readonly insert_student_material_favorite_one: {
        readonly material_id: number;
        readonly student_id: number;
    } | null;
};
export type favoriteLearningUnitMutation = {
    readonly response: favoriteLearningUnitMutationResponse;
    readonly variables: favoriteLearningUnitMutationVariables;
};



/*
mutation favoriteLearningUnitMutation(
  $material_id: Int!
  $student_id: Int!
) {
  insert_student_material_favorite_one(object: {material_id: $material_id, student_id: $student_id}) {
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
    "concreteType": "student_material_favorite",
    "kind": "LinkedField",
    "name": "insert_student_material_favorite_one",
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
    "name": "favoriteLearningUnitMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "favoriteLearningUnitMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "831fa7425fb521d399a7af9295cfacbd",
    "id": null,
    "metadata": {},
    "name": "favoriteLearningUnitMutation",
    "operationKind": "mutation",
    "text": "mutation favoriteLearningUnitMutation(\n  $material_id: Int!\n  $student_id: Int!\n) {\n  insert_student_material_favorite_one(object: {material_id: $material_id, student_id: $student_id}) {\n    material_id\n    student_id\n  }\n}\n"
  }
};
})();
(node as any).hash = '59904ad3fe17a1eb8375114842133975';
export default node;
