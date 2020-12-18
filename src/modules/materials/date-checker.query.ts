import graphql from "babel-plugin-relay/macro";

export const dateChecker = graphql`
  query dateCheckerQuery($material_id: Int) {
    learning_unit(where: { materials: { _id: { _eq: $material_id } } }) {
      learning_unity_releases {
        learning_unit_liberation_date
      }
    }
  }
`;
