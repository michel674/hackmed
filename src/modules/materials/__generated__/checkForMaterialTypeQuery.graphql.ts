/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type checkForMaterialTypeQueryVariables = {
    material_id?: number | null;
};
export type checkForMaterialTypeQueryResponse = {
    readonly material_type: ReadonlyArray<{
        readonly _id: number;
        readonly description: string;
    }>;
};
export type checkForMaterialTypeQuery = {
    readonly response: checkForMaterialTypeQueryResponse;
    readonly variables: checkForMaterialTypeQueryVariables;
};



/*
query checkForMaterialTypeQuery(
  $material_id: Int
) {
  material_type(where: {materials: {_id: {_eq: $material_id}}}) {
    _id
    description
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
    "concreteType": "material_type",
    "kind": "LinkedField",
    "name": "material_type",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
    "name": "checkForMaterialTypeQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "checkForMaterialTypeQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ce3b04ddbcd9465f21cdaaa42034ae0a",
    "id": null,
    "metadata": {},
    "name": "checkForMaterialTypeQuery",
    "operationKind": "query",
    "text": "query checkForMaterialTypeQuery(\n  $material_id: Int\n) {\n  material_type(where: {materials: {_id: {_eq: $material_id}}}) {\n    _id\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '34cab40bf2804b5b8d5018827ad47fcd';
export default node;
