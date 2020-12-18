/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type materialButtonsQueryVariables = {
    material_id?: number | null;
};
export type materialButtonsQueryResponse = {
    readonly student_material_favorite: ReadonlyArray<{
        readonly student_id: number;
    }>;
};
export type materialButtonsQuery = {
    readonly response: materialButtonsQueryResponse;
    readonly variables: materialButtonsQueryVariables;
};



/*
query materialButtonsQuery(
  $material_id: Int
) {
  student_material_favorite(where: {material_id: {_eq: $material_id}}) {
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
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "student_material_favorite",
    "kind": "LinkedField",
    "name": "student_material_favorite",
    "plural": true,
    "selections": [
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
    "name": "materialButtonsQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "materialButtonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f9ecbdf32b41b2a7f1242780cd2506b9",
    "id": null,
    "metadata": {},
    "name": "materialButtonsQuery",
    "operationKind": "query",
    "text": "query materialButtonsQuery(\n  $material_id: Int\n) {\n  student_material_favorite(where: {material_id: {_eq: $material_id}}) {\n    student_id\n  }\n}\n"
  }
};
})();
(node as any).hash = '51ecf565e9e656c5beee93009d034eea';
export default node;
