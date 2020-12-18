import graphql from "babel-plugin-relay/macro";

export const favoritesNumberQuery = graphql`
  query materialButtonsQuery($material_id: Int) {
    student_material_favorite(where: { material_id: { _eq: $material_id } }) {
      student_id
    }
  }
`;
