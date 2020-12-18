/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type videoDetailsQueryVariables = {
    material_id: number;
};
export type videoDetailsQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly description: string | null;
        readonly duration: number | null;
        readonly extra: unknown | null;
        readonly views: number;
        readonly _id: number;
        readonly title: string;
        readonly order: number | null;
        readonly tags: ReadonlyArray<{
            readonly tag: {
                readonly name: string;
            };
        }>;
    }>;
};
export type videoDetailsQuery = {
    readonly response: videoDetailsQueryResponse;
    readonly variables: videoDetailsQueryVariables;
};



/*
query videoDetailsQuery(
  $material_id: Int!
) {
  material(where: {_id: {_eq: $material_id}}) {
    description
    duration
    extra
    views
    _id
    title
    order
    tags {
      tag {
        name
      }
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
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "duration",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "extra",
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
        "name": "_id",
        "storageKey": null
      },
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
        "name": "order",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "tags",
        "kind": "LinkedField",
        "name": "tags",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "tag",
            "kind": "LinkedField",
            "name": "tag",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
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
    "name": "videoDetailsQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "videoDetailsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "faeff19d37569f558e6fe91df9345f64",
    "id": null,
    "metadata": {},
    "name": "videoDetailsQuery",
    "operationKind": "query",
    "text": "query videoDetailsQuery(\n  $material_id: Int!\n) {\n  material(where: {_id: {_eq: $material_id}}) {\n    description\n    duration\n    extra\n    views\n    _id\n    title\n    order\n    tags {\n      tag {\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '596dafbf85e59e0df035a033c41f805f';
export default node;
