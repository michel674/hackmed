/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type masterclassQueryVariables = {
    material_id?: number | null;
};
export type masterclassQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly _id: number;
        readonly content: unknown | null;
    }>;
};
export type masterclassQuery = {
    readonly response: masterclassQueryResponse;
    readonly variables: masterclassQueryVariables;
};



/*
query masterclassQuery(
  $material_id: Int
) {
  material(where: {_id: {_eq: $material_id}}) {
    _id
    content
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
            "name": "_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "material",
    "kind": "LinkedField",
    "name": "material",
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
        "name": "content",
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
    "name": "masterclassQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "masterclassQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "46525387187ebf27617d7f250de2b89c",
    "id": null,
    "metadata": {},
    "name": "masterclassQuery",
    "operationKind": "query",
    "text": "query masterclassQuery(\n  $material_id: Int\n) {\n  material(where: {_id: {_eq: $material_id}}) {\n    _id\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = '812c0b66d5392c61684b83e8a0cc3af1';
export default node;
