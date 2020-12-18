import graphql from "babel-plugin-relay/macro";

export const statistics = graphql`
  query statisticsQuery($student_id: Int!) {
    student_material_history(where: { student_id: { _eq: $student_id } }) {
      material_id
      material {
        _id
        material_type
      }
    }
  }
`;
