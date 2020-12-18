/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type quizQueryVariables = {};
export type quizQueryResponse = {
    readonly material: ReadonlyArray<{
        readonly content: unknown | null;
    }>;
};
export type quizQuery = {
    readonly response: quizQueryResponse;
    readonly variables: quizQueryVariables;
};



/*
query quizQuery {
  material(where: {_id: {_eq: 20}}) {
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "where",
        "value": {
          "_id": {
            "_eq": 20
          }
        }
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
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": "material(where:{\"_id\":{\"_eq\":20}})"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "quizQuery",
    "selections": (v0/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "quizQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "94f77288d5cca302da2ac3bfc3897556",
    "id": null,
    "metadata": {},
    "name": "quizQuery",
    "operationKind": "query",
    "text": "query quizQuery {\n  material(where: {_id: {_eq: 20}}) {\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = '11fc0d31a8d85f40c100c6b86f5f0b1c';
export default node;
