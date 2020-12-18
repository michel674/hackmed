import graphql from "babel-plugin-relay/macro";

export const register = graphql`
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
    insert_student(
      objects: {
        category: $category
        class: $class
        cpf: $cpf
        date_of_birth: $date_of_birth
        department: $department
        email: $email
        last_name: $last_name
        name: $name
        schooling: $schooling
        office: $office
        telephone: $telephone
        sub_category: $sub_category
        company_id: $company_id
        hash_code: $hash_code
      }
    ) {
      affected_rows
    }
  }
`;
