import graphql from "babel-plugin-relay/macro";

export const checkIfImageIsComplete = graphql`
  query checkIfImageIsCompleteQuery($material_id: Int, $student_id: Int) {
    student_material_history(
      where: {
        material_id: { _eq: $material_id }
        student_id: { _eq: $student_id }
      }
    ) {
      progress
    }
  }
`;
