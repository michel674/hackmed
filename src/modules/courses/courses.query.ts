import graphql from "babel-plugin-relay/macro";

export const courses = graphql`
  query coursesQuery($student_id: Int, $class_id: Int) {
    modules {
      _id
      thumbnail
      name
      learning_units {
        materials {
          _id
          student_material_histories(
            where: { student_id: { _eq: $student_id } }
          ) {
            progress
          }
        }
        _id
      }
      module_releases(where: { class: { _eq: $class_id } }) {
        release_date
      }
    }
  }
`;
