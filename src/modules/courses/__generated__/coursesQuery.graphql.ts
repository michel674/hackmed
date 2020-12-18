/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type coursesQueryVariables = {
    student_id?: number | null;
    class_id?: number | null;
};
export type coursesQueryResponse = {
    readonly modules: ReadonlyArray<{
        readonly _id: number;
        readonly thumbnail: string | null;
        readonly name: string;
        readonly learning_units: ReadonlyArray<{
            readonly materials: ReadonlyArray<{
                readonly _id: number;
                readonly student_material_histories: ReadonlyArray<{
                    readonly progress: number;
                }>;
            }>;
            readonly _id: number;
        }>;
        readonly module_releases: ReadonlyArray<{
            readonly release_date: unknown;
        }>;
    }>;
};
export type coursesQuery = {
    readonly response: coursesQueryResponse;
    readonly variables: coursesQueryVariables;
};



/*
query coursesQuery(
  $student_id: Int
  $class_id: Int
) {
  modules {
    _id
    thumbnail
    name
    learning_units {
      materials {
        _id
        student_material_histories(where: {student_id: {_eq: $student_id}}) {
          progress
        }
      }
      _id
    }
    module_releases(where: {class: {_eq: $class_id}}) {
      release_date
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "class_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "student_id"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "modules",
    "kind": "LinkedField",
    "name": "modules",
    "plural": true,
    "selections": [
      (v2/*: any*/),
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "learning_unit",
        "kind": "LinkedField",
        "name": "learning_units",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "material",
            "kind": "LinkedField",
            "name": "materials",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
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
                    "variableName": "class_id"
                  }
                ],
                "kind": "ObjectValue",
                "name": "class"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "module_release",
        "kind": "LinkedField",
        "name": "module_releases",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "release_date",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "coursesQuery",
    "selections": (v3/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "coursesQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5c1bcaefa90b5d570c96a7f66b0f38f3",
    "id": null,
    "metadata": {},
    "name": "coursesQuery",
    "operationKind": "query",
    "text": "query coursesQuery(\n  $student_id: Int\n  $class_id: Int\n) {\n  modules {\n    _id\n    thumbnail\n    name\n    learning_units {\n      materials {\n        _id\n        student_material_histories(where: {student_id: {_eq: $student_id}}) {\n          progress\n        }\n      }\n      _id\n    }\n    module_releases(where: {class: {_eq: $class_id}}) {\n      release_date\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1ebbdb9e1cc8ae0c750a2de2a2c44b66';
export default node;
