/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type tagRelatedMaterialsQueryVariables = {
    material_id: number;
};
export type tagRelatedMaterialsQueryResponse = {
    readonly tags: ReadonlyArray<{
        readonly tag: {
            readonly _id: number;
            readonly name: string;
            readonly tags_aggregate: {
                readonly nodes: ReadonlyArray<{
                    readonly material: {
                        readonly _id: number;
                        readonly title: string;
                        readonly thumbnail: string | null;
                        readonly views: number;
                        readonly duration: number | null;
                    };
                }>;
            };
        };
    }>;
};
export type tagRelatedMaterialsQuery = {
    readonly response: tagRelatedMaterialsQueryResponse;
    readonly variables: tagRelatedMaterialsQueryVariables;
};



/*
query tagRelatedMaterialsQuery(
  $material_id: Int!
) {
  tags(where: {material_id: {_eq: $material_id}}) {
    tag {
      _id
      name
      tags_aggregate(where: {material_id: {_neq: $material_id}}, limit: 5, distinct_on: material_id) {
        nodes {
          material {
            _id
            title
            thumbnail
            views
            duration
          }
        }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = [
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "distinct_on",
                "value": "material_id"
              },
              {
                "kind": "Literal",
                "name": "limit",
                "value": 5
              },
              {
                "fields": [
                  {
                    "fields": [
                      {
                        "kind": "Variable",
                        "name": "_neq",
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
            "concreteType": "tags_aggregate",
            "kind": "LinkedField",
            "name": "tags_aggregate",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "tags",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "material",
                    "kind": "LinkedField",
                    "name": "material",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
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
                        "name": "thumbnail",
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
                        "name": "duration",
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
    "name": "tagRelatedMaterialsQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tagRelatedMaterialsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a3460cec6d3631a1f2824c7eb8620bac",
    "id": null,
    "metadata": {},
    "name": "tagRelatedMaterialsQuery",
    "operationKind": "query",
    "text": "query tagRelatedMaterialsQuery(\n  $material_id: Int!\n) {\n  tags(where: {material_id: {_eq: $material_id}}) {\n    tag {\n      _id\n      name\n      tags_aggregate(where: {material_id: {_neq: $material_id}}, limit: 5, distinct_on: material_id) {\n        nodes {\n          material {\n            _id\n            title\n            thumbnail\n            views\n            duration\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '89e51ad99f48cc0430ad7f0c40846e77';
export default node;
