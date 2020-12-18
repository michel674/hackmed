/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type learningUnitQueryVariables = {
    class_id?: number | null;
};
export type learningUnitQueryResponse = {
    readonly learning_unit: ReadonlyArray<{
        readonly _id: number;
        readonly category: number | null;
        readonly image: string | null;
        readonly name: string;
        readonly materials: ReadonlyArray<{
            readonly _id: number;
        }>;
    }>;
    readonly category: ReadonlyArray<{
        readonly _id: number;
        readonly name: string;
    }>;
    readonly learning_unity_release: ReadonlyArray<{
        readonly learning_unit_liberation_date: unknown;
        readonly learning_unit: number;
    }>;
};
export type learningUnitQuery = {
    readonly response: learningUnitQueryResponse;
    readonly variables: learningUnitQueryVariables;
};



/*
query learningUnitQuery(
  $class_id: Int
) {
  learning_unit {
    _id
    category
    image
    name
    materials {
      _id
    }
  }
  category {
    _id
    name
  }
  learning_unity_release(where: {class: {_eq: $class_id}}) {
    learning_unit_liberation_date
    learning_unit
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "class_id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
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
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "material",
        "kind": "LinkedField",
        "name": "materials",
        "plural": true,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "category",
    "kind": "LinkedField",
    "name": "category",
    "plural": true,
    "selections": [
      (v1/*: any*/),
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
    "concreteType": "learning_unity_release",
    "kind": "LinkedField",
    "name": "learning_unity_release",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "learning_unit_liberation_date",
        "storageKey": null
      },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "learningUnitQuery",
    "selections": (v3/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "learningUnitQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "72bda341baffe2e43bf616430268c857",
    "id": null,
    "metadata": {},
    "name": "learningUnitQuery",
    "operationKind": "query",
    "text": "query learningUnitQuery(\n  $class_id: Int\n) {\n  learning_unit {\n    _id\n    category\n    image\n    name\n    materials {\n      _id\n    }\n  }\n  category {\n    _id\n    name\n  }\n  learning_unity_release(where: {class: {_eq: $class_id}}) {\n    learning_unit_liberation_date\n    learning_unit\n  }\n}\n"
  }
};
})();
(node as any).hash = '6796f72d55d91f555620975f0dc5bdff';
export default node;
