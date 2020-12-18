import graphql from "babel-plugin-relay/macro";

export const materialsByType = graphql`
  query materialsByTypeQuery($materialType: Int!) {
    material(where: { material_type: { _eq: $materialType } }) {
      title
      views
      material_type
      _id
      created_at
      content
      duration
    }
  }
`;
