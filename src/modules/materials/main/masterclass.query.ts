import graphql from "babel-plugin-relay/macro";

export const masterclass = graphql`
  query masterclassQuery($material_id: Int) {
    material(where: { _id: { _eq: $material_id } }) {
      _id
      content
    }
  }
`;
