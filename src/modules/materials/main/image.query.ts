import graphql from "babel-plugin-relay/macro";

export const image = graphql`
  query imageQuery($material_id: Int, $student_id: Int) {
    material(where: { _id: { _eq: $material_id } }) {
      _id
      content
      student_material_histories(
        where: {
          material_id: { _eq: $material_id }
          student_id: { _eq: $student_id }
        }
      ) {
        progress
      }
    }
  }
`;
