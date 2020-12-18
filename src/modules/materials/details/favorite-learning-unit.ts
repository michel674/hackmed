import graphql from "babel-plugin-relay/macro";

export const addFavoriteLearningUnit = graphql`
  mutation favoriteLearningUnitMutation($material_id: Int!, $student_id: Int!) {
    insert_student_material_favorite_one(
      object: { material_id: $material_id, student_id: $student_id }
    ) {
      material_id
      student_id
    }
  }
`;
