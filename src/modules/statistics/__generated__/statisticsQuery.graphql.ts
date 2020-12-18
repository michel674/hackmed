/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type statisticsQueryVariables = {
    student_id: number;
};
export type statisticsQueryResponse = {
    readonly student_material_history: ReadonlyArray<{
        readonly material_id: number | null;
        readonly material: {
            readonly _id: number;
            readonly material_type: number | null;
        } | null;
    }>;
};
export type statisticsQuery = {
    readonly response: statisticsQueryResponse;
    readonly variables: statisticsQueryVariables;
};



/*
query statisticsQuery(
  $student_id: Int!
) {
  student_material_history(where: {student_id: {_eq: $student_id}}) {
    material_id
    material {
      _id
      material_type
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "student_id"
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
    "name": "student_material_history",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "material_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "material",
        "kind": "LinkedField",
        "name": "material",
        "plural": false,
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
            "name": "material_type",
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
    "name": "statisticsQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "statisticsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3ce2318111f615f2e107763e22009155",
    "id": null,
    "metadata": {},
    "name": "statisticsQuery",
    "operationKind": "query",
    "text": "query statisticsQuery(\n  $student_id: Int!\n) {\n  student_material_history(where: {student_id: {_eq: $student_id}}) {\n    material_id\n    material {\n      _id\n      material_type\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7719968a4452225cf4daf7a35692da93';
export default node;
