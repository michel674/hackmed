import graphql from "babel-plugin-relay/macro";

export const articleContainer = graphql`
  query articleContainerQuery($material_id: Int, $student_id: Int) {
    material(where: { _id: { _eq: $material_id } }) {
      content
      _id
      student_material_histories(where: { student_id: { _eq: $student_id } }) {
        progress
      }
    }
  }
`;
