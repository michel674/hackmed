/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type materialsByTypeQueryVariables = {
    materialType: number;
};
export type materialsByTypeQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly title: string;
        readonly views: number;
        readonly material_type: number | null;
        readonly _id: number;
        readonly created_at: unknown;
        readonly content: unknown | null;
        readonly duration: number | null;
    }>;
};
export type materialsByTypeQuery = {
    readonly response: materialsByTypeQueryResponse;
    readonly variables: materialsByTypeQueryVariables;
};



/*
query materialsByTypeQuery(
  $materialType: Int!
) {
  material(where: {material_type: {_eq: $materialType}}) {
    title
    views
    material_type
    _id
    created_at
    content
    duration
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "materialType"
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
                "variableName": "materialType"
              }
            ],
            "kind": "ObjectValue",
            "name": "material_type"
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
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "views",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "material_type",
        "storageKey": null
      },
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
        "name": "created_at",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "duration",
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
    "name": "materialsByTypeQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "materialsByTypeQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "707a6125e658ba2dde556f0548a7d0e5",
    "id": null,
    "metadata": {},
    "name": "materialsByTypeQuery",
    "operationKind": "query",
    "text": "query materialsByTypeQuery(\n  $materialType: Int!\n) {\n  material(where: {material_type: {_eq: $materialType}}) {\n    title\n    views\n    material_type\n    _id\n    created_at\n    content\n    duration\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f3b2b396b6e6ea5dd92f77ee8a72aa24';
export default node;
