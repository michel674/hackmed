import graphql from "babel-plugin-relay/macro";

export const markAsComplete = graphql`
  mutation markAsCompleteMutation($material_id: Int, $student_id: Int) {
    update_student_material_history(
      where: {
        student_id: { _eq: $student_id }
        material_id: { _eq: $material_id }
      }
      _set: { progress: 100 }
    ) {
      affected_rows
    }
  }
`;
