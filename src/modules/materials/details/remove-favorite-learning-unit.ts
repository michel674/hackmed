import graphql from "babel-plugin-relay/macro";

export const RemoveFavoriteLearningUnit = graphql`
  mutation removeFavoriteLearningUnitMutation(
    $material_id: Int!
    $student_id: Int!
  ) {
    delete_student_material_favorite(
      where: {
        material_id: { _eq: $material_id }
        student_id: { _eq: $student_id }
      }
    ) {
      affected_rows
      returning {
        material_id
        student_id
      }
    }
  }
`;
