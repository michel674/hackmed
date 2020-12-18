import graphql from "babel-plugin-relay/macro";

export const checkForMaterialType = graphql`
  query checkForMaterialTypeQuery($material_id: Int) {
    material_type(where: { materials: { _id: { _eq: $material_id } } }) {
      _id
      description
    }
  }
`;
