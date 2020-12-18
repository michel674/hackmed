/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type learningUnitByCoursesQueryVariables = {
    student_id?: number | null;
    module_id?: number | null;
    class_id?: number | null;
};
export type learningUnitByCoursesQueryResponse = {
    readonly learning_unit: ReadonlyArray<{
        readonly _id: number;
        readonly name: string;
        readonly image: string | null;
        readonly materials: ReadonlyArray<{
            readonly _id: number;
            readonly order: number | null;
            readonly student_material_histories: ReadonlyArray<{
                readonly progress: number;
            }>;
        }>;
        readonly learning_unity_releases: ReadonlyArray<{
            readonly learning_unit_liberation_date: unknown;
        }>;
    }>;
    readonly learning_unity_release: ReadonlyArray<{
        readonly learning_unit_liberation_date: unknown;
        readonly learning_unit: number;
    }>;
};
export type learningUnitByCoursesQuery = {
    readonly response: learningUnitByCoursesQueryResponse;
    readonly variables: learningUnitByCoursesQueryVariables;
};



/*
query learningUnitByCoursesQuery(
  $student_id: Int
  $module_id: Int
  $class_id: Int
) {
  learning_unit(where: {module_id: {_eq: $module_id}}) {
    _id
    name
    image
    materials {
      _id
      order
      student_material_histories(where: {student_id: {_eq: $student_id}}) {
        progress
      }
    }
    learning_unity_releases(where: {class_id: {_id: {_eq: $class_id}}}) {
      learning_unit_liberation_date
    }
  }
  learning_unity_release(where: {class: {_eq: $class_id}}) {
    learning_unit_liberation_date
    learning_unit
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
  "name": "module_id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "student_id"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "_eq",
    "variableName": "class_id"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "learning_unit_liberation_date",
  "storageKey": null
},
v6 = [
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
                "variableName": "module_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "module_id"
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
      (v3/*: any*/),
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
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "material",
        "kind": "LinkedField",
        "name": "materials",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "order",
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
                    "fields": (v4/*: any*/),
                    "kind": "ObjectValue",
                    "name": "_id"
                  }
                ],
                "kind": "ObjectValue",
                "name": "class_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "where"
          }
        ],
        "concreteType": "learning_unity_release",
        "kind": "LinkedField",
        "name": "learning_unity_releases",
        "plural": true,
        "selections": [
          (v5/*: any*/)
        ],
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
            "fields": (v4/*: any*/),
            "kind": "ObjectValue",
            "name": "class"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "learning_unity_release",
    "kind": "LinkedField",
    "name": "learning_unity_release",
    "plural": true,
    "selections": [
      (v5/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "learning_unit",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "learningUnitByCoursesQuery",
    "selections": (v6/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "learningUnitByCoursesQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "eb66edcce469a5e27197b5c676995e52",
    "id": null,
    "metadata": {},
    "name": "learningUnitByCoursesQuery",
    "operationKind": "query",
    "text": "query learningUnitByCoursesQuery(\n  $student_id: Int\n  $module_id: Int\n  $class_id: Int\n) {\n  learning_unit(where: {module_id: {_eq: $module_id}}) {\n    _id\n    name\n    image\n    materials {\n      _id\n      order\n      student_material_histories(where: {student_id: {_eq: $student_id}}) {\n        progress\n      }\n    }\n    learning_unity_releases(where: {class_id: {_id: {_eq: $class_id}}}) {\n      learning_unit_liberation_date\n    }\n  }\n  learning_unity_release(where: {class: {_eq: $class_id}}) {\n    learning_unit_liberation_date\n    learning_unit\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f8ea597f42e8d41ae3eb9b288d92a674';
export default node;
