import graphql from "babel-plugin-relay/macro";

export const updateMaterialHistory = graphql`
  mutation updateQuizHistoryMutation(
    $quiz_score: numeric
    $material_id: Int
    $student_id: Int
  ) {
    update_student_material_history(
      where: {
        student_id: { _eq: $student_id }
        material: { _id: { _eq: $material_id } }
      }
      _set: { progress: 100, quiz_score: $quiz_score }
    ) {
      affected_rows
    }
  }
`;
