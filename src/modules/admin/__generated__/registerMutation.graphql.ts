/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type registerMutationVariables = {
    category?: string | null;
    cpf?: string | null;
    date_of_birth?: unknown | null;
    department?: string | null;
    email?: string | null;
    class?: number | null;
    last_name?: string | null;
    name?: string | null;
    schooling?: string | null;
    office?: string | null;
    telephone?: unknown | null;
    sub_category?: string | null;
    company_id?: number | null;
    hash_code?: string | null;
};
export type registerMutationResponse = {
    readonly insert_student: {
        readonly affected_rows: number;
    } | null;
};
export type registerMutation = {
    readonly response: registerMutationResponse;
    readonly variables: registerMutationVariables;
};



/*
mutation registerMutation(
  $category: String
  $cpf: String
  $date_of_birth: date
  $department: String
  $email: String
  $class: Int
  $last_name: String
  $name: String
  $schooling: String
  $office: String
  $telephone: numeric
  $sub_category: String
  $company_id: Int
  $hash_code: String
) {
  insert_student(objects: {category: $category, class: $class, cpf: $cpf, date_of_birth: $date_of_birth, department: $department, email: $email, last_name: $last_name, name: $name, schooling: $schooling, office: $office, telephone: $telephone, sub_category: $sub_category, company_id: $company_id, hash_code: $hash_code}) {
    affected_rows
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "category"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "class"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "company_id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cpf"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "date_of_birth"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "department"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hash_code"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "last_name"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "office"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schooling"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sub_category"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "telephone"
},
v14 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "category",
            "variableName": "category"
          },
          {
            "kind": "Variable",
            "name": "class",
            "variableName": "class"
          },
          {
            "kind": "Variable",
            "name": "company_id",
            "variableName": "company_id"
          },
          {
            "kind": "Variable",
            "name": "cpf",
            "variableName": "cpf"
          },
          {
            "kind": "Variable",
            "name": "date_of_birth",
            "variableName": "date_of_birth"
          },
          {
            "kind": "Variable",
            "name": "department",
            "variableName": "department"
          },
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "hash_code",
            "variableName": "hash_code"
          },
          {
            "kind": "Variable",
            "name": "last_name",
            "variableName": "last_name"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "office",
            "variableName": "office"
          },
          {
            "kind": "Variable",
            "name": "schooling",
            "variableName": "schooling"
          },
          {
            "kind": "Variable",
            "name": "sub_category",
            "variableName": "sub_category"
          },
          {
            "kind": "Variable",
            "name": "telephone",
            "variableName": "telephone"
          }
        ],
        "kind": "ObjectValue",
        "name": "objects"
      }
    ],
    "concreteType": "student_mutation_response",
    "kind": "LinkedField",
    "name": "insert_student",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affected_rows",
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "registerMutation",
    "selections": (v14/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v1/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v11/*: any*/),
      (v10/*: any*/),
      (v13/*: any*/),
      (v12/*: any*/),
      (v2/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Operation",
    "name": "registerMutation",
    "selections": (v14/*: any*/)
  },
  "params": {
    "cacheID": "526643beb1ba5406f3a406e262ad511b",
    "id": null,
    "metadata": {},
    "name": "registerMutation",
    "operationKind": "mutation",
    "text": "mutation registerMutation(\n  $category: String\n  $cpf: String\n  $date_of_birth: date\n  $department: String\n  $email: String\n  $class: Int\n  $last_name: String\n  $name: String\n  $schooling: String\n  $office: String\n  $telephone: numeric\n  $sub_category: String\n  $company_id: Int\n  $hash_code: String\n) {\n  insert_student(objects: {category: $category, class: $class, cpf: $cpf, date_of_birth: $date_of_birth, department: $department, email: $email, last_name: $last_name, name: $name, schooling: $schooling, office: $office, telephone: $telephone, sub_category: $sub_category, company_id: $company_id, hash_code: $hash_code}) {\n    affected_rows\n  }\n}\n"
  }
};
})();
(node as any).hash = '764417c0b1a3209f69a3f9bd13b99ebd';
export default node;
