/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type dateCheckerQueryVariables = {
    material_id?: number | null;
};
export type dateCheckerQueryResponse = {
    readonly learning_unit: ReadonlyArray<{
        readonly learning_unity_releases: ReadonlyArray<{
            readonly learning_unit_liberation_date: unknown;
        }>;
    }>;
};
export type dateCheckerQuery = {
    readonly response: dateCheckerQueryResponse;
    readonly variables: dateCheckerQueryVariables;
};



/*
query dateCheckerQuery(
  $material_id: Int
) {
  learning_unit(where: {materials: {_id: {_eq: $material_id}}}) {
    learning_unity_releases {
      learning_unit_liberation_date
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
            "name": "materials"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "learning_unit",
    "kind": "LinkedField",
    "name": "learning_unit",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "learning_unity_release",
        "kind": "LinkedField",
        "name": "learning_unity_releases",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "learning_unit_liberation_date",
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
    "name": "dateCheckerQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "dateCheckerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0b7e44ed2ef78c576618438d5c5f89f6",
    "id": null,
    "metadata": {},
    "name": "dateCheckerQuery",
    "operationKind": "query",
    "text": "query dateCheckerQuery(\n  $material_id: Int\n) {\n  learning_unit(where: {materials: {_id: {_eq: $material_id}}}) {\n    learning_unity_releases {\n      learning_unit_liberation_date\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e1f90fd1789b0018f30af1f5d6e33f51';
export default node;
