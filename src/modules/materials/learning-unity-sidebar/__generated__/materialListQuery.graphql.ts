/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type materialListQueryVariables = {
    material_id: number;
    student_id?: number | null;
};
export type materialListQueryResponse = {
    readonly learning_unit: ReadonlyArray<{
        readonly _id: number;
        readonly name: string;
        readonly module_id: number | null;
        readonly materials: ReadonlyArray<{
            readonly _id: number;
            readonly title: string;
            readonly views: number;
            readonly order: number | null;
            readonly thumbnail: string | null;
            readonly student_material_favorites: ReadonlyArray<{
                readonly student_id: number;
            }>;
            readonly student_material_histories: ReadonlyArray<{
                readonly progress: number;
            }>;
            readonly materialByType: {
                readonly description: string;
            } | null;
        }>;
    }>;
};
export type materialListQuery = {
    readonly response: materialListQueryResponse;
    readonly variables: materialListQueryVariables;
};



/*
query materialListQuery(
  $material_id: Int!
  $student_id: Int
) {
  learning_unit(where: {materials: {_id: {_eq: $material_id}}}) {
    _id
    name
    module_id
    materials(order_by: {order: asc}) {
      _id
      title
      views
      order
      thumbnail
      student_material_favorites {
        student_id
      }
      student_material_histories(where: {student_id: {_eq: $student_id}}) {
        progress
      }
      materialByType {
        description
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "student_id"
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
        "args": null,
        "kind": "ScalarField",
        "name": "module_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "order_by",
            "value": {
              "order": "asc"
            }
          }
        ],
        "concreteType": "material",
        "kind": "LinkedField",
        "name": "materials",
        "plural": true,
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
            "name": "views",
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
            "kind": "ScalarField",
            "name": "thumbnail",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "student_material_favorite",
            "kind": "LinkedField",
            "name": "student_material_favorites",
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
          },
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
            "concreteType": "student_material_history",
            "kind": "LinkedField",
            "name": "student_material_histories",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "progress",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "material_type",
            "kind": "LinkedField",
            "name": "materialByType",
            "plural": false,
            "selections": [
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
        ],
        "storageKey": "materials(order_by:{\"order\":\"asc\"})"
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
    "name": "materialListQuery",
    "selections": (v2/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "materialListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2398f04090af61e5ece254a304253980",
    "id": null,
    "metadata": {},
    "name": "materialListQuery",
    "operationKind": "query",
    "text": "query materialListQuery(\n  $material_id: Int!\n  $student_id: Int\n) {\n  learning_unit(where: {materials: {_id: {_eq: $material_id}}}) {\n    _id\n    name\n    module_id\n    materials(order_by: {order: asc}) {\n      _id\n      title\n      views\n      order\n      thumbnail\n      student_material_favorites {\n        student_id\n      }\n      student_material_histories(where: {student_id: {_eq: $student_id}}) {\n        progress\n      }\n      materialByType {\n        description\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8562dcbe46c7a5cd01b71ece15b23755';
export default node;
