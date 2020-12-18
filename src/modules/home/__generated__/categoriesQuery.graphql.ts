/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type categoriesQueryVariables = {};
export type categoriesQueryResponse = {
    readonly category: ReadonlyArray<{
        readonly _id: number;
        readonly name: string;
        readonly image: string | null;
    }>;
};
export type categoriesQuery = {
    readonly response: categoriesQueryResponse;
    readonly variables: categoriesQueryVariables;
};



/*
query categoriesQuery {
  category {
    _id
    name
    image
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "category",
    "kind": "LinkedField",
    "name": "category",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "categoriesQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "categoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0a8e91989b196e6025d270519f881934",
    "id": null,
    "metadata": {},
    "name": "categoriesQuery",
    "operationKind": "query",
    "text": "query categoriesQuery {\n  category {\n    _id\n    name\n    image\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b50d9f285dd220cc1a3ec09fec042c1c';
export default node;
