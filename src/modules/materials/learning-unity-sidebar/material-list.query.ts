import graphql from "babel-plugin-relay/macro";

export const learningUnitList = graphql`
  query materialListQuery($material_id: Int!, $student_id: Int) {
    learning_unit(where: { materials: { _id: { _eq: $material_id } } }) {
      _id
      name
      module_id
      materials(order_by: { order: asc }) {
        _id
        title
        views
        order
        thumbnail
        student_material_favorites {
          student_id
        }
        student_material_histories(
          where: { student_id: { _eq: $student_id } }
        ) {
          progress
        }
        materialByType {
          description
        }
      }
    }
  }
`;
