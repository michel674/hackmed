import graphql from "babel-plugin-relay/macro";

export const checkForHistory = graphql`
  query checkForHistoryQuery($student_id: Int, $material_id: Int) {
    student_material_history(
      where: {
        material_id: { _eq: $material_id }
        student_id: { _eq: $student_id }
      }
    ) {
      _id
    }
  }
`;
