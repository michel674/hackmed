import graphql from "babel-plugin-relay/macro";

export const addPauseMutation = graphql`
  mutation addPauseMutation(
    $material_id: Int
    $student_id: Int
    $pauses: Int = 1
  ) {
    update_student_material_history(
      where: {
        material_id: { _eq: $material_id }
        student_id: { _eq: $student_id }
      }
      _inc: { pauses: $pauses }
    ) {
      affected_rows
      returning {
        pauses
      }
    }
  }
`;
