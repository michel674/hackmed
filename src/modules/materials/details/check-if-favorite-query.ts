import graphql from "babel-plugin-relay/macro";

export const checkIfFavorite = graphql`
  query checkIfFavoriteQuery($student_id: Int, $material_id: Int) {
    material(where: { _id: { _eq: $material_id } }) {
      student_material_favorites(where: { student_id: { _eq: $student_id } }) {
        _id
      }
      student_material_favorites_aggregate {
        nodes {
          _id
        }
      }
    }
  }
`;
