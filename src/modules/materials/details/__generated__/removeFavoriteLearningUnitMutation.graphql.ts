/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type removeFavoriteLearningUnitMutationVariables = {
    material_id: number;
    student_id: number;
};
export type removeFavoriteLearningUnitMutationResponse = {
    readonly delete_student_material_favorite: {
        readonly affected_rows: number;
        readonly returning: ReadonlyArray<{
            readonly material_id: number;
            readonly student_id: number;
        }>;
    } | null;
};
export type removeFavoriteLearningUnitMutation = {
    readonly response: removeFavoriteLearningUnitMutationResponse;
    readonly variables: removeFavoriteLearningUnitMutationVariables;
};



/*
mutation removeFavoriteLearningUnitMutation(
  $material_id: Int!
  $student_id: Int!
) {
  delete_student_material_favorite(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {
    affected_rows
    returning {
      material_id
      student_id
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
    "concreteType": "student_material_favorite_mutation_response",
    "kind": "LinkedField",
    "name": "delete_student_material_favorite",
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
        "concreteType": "student_material_favorite",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "removeFavoriteLearningUnitMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "removeFavoriteLearningUnitMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "03d44ef619837ae3f9c507c5b81964e5",
    "id": null,
    "metadata": {},
    "name": "removeFavoriteLearningUnitMutation",
    "operationKind": "mutation",
    "text": "mutation removeFavoriteLearningUnitMutation(\n  $material_id: Int!\n  $student_id: Int!\n) {\n  delete_student_material_favorite(where: {material_id: {_eq: $material_id}, student_id: {_eq: $student_id}}) {\n    affected_rows\n    returning {\n      material_id\n      student_id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '68a4ef67f990461fe44ca9c654e91054';
export default node;
