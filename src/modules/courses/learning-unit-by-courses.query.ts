import graphql from "babel-plugin-relay/macro";

export const learningUnitByCourses = graphql`
  query learningUnitByCoursesQuery(
    $student_id: Int
    $module_id: Int
    $class_id: Int
  ) {
    learning_unit(where: { module_id: { _eq: $module_id } }) {
      _id
      name
      image
      materials {
        _id
        order
        student_material_histories(
          where: { student_id: { _eq: $student_id } }
        ) {
          progress
        }
      }
      learning_unity_releases(
        where: { class_id: { _id: { _eq: $class_id } } }
      ) {
        learning_unit_liberation_date
      }
    }
    learning_unity_release(where: {class: {_eq: $class_id}}) {
      learning_unit_liberation_date
      learning_unit
    }
  }
`;
