import graphql from "babel-plugin-relay/macro";

export const updateProgressIntoDb = graphql`
  mutation updateProgressIntoDbMutation(
    $student_id: Int
    $material_id: Int
    $progress: Int
  ) {
    update_student_material_history(
      where: {
        student_id: { _eq: $student_id }
        material_id: { _eq: $material_id }
      }
      _set: { progress: $progress }
    ) {
      affected_rows
    }
  }
`;
