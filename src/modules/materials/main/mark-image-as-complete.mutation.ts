import graphql from "babel-plugin-relay/macro";

export const markImageAsComplete = graphql`
  mutation markImageAsCompleteMutation($material_id: Int, $student_id: Int) {
    update_student_material_history(
      where: {
        material_id: { _eq: $material_id }
        student_id: { _eq: $student_id }
      }
      _set: { progress: 100 }
    ) {
      affected_rows
    }
  }
`;
