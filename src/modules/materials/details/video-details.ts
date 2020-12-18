import graphql from "babel-plugin-relay/macro";

export const videoDetails = graphql`
  query videoDetailsQuery($material_id: Int!) {
    material(where: { _id: { _eq: $material_id } }) {
      description
      duration
      extra
      views
      _id
      title
      order
      tags {
        tag {
          name
        }
      }
    }
  }
`;
