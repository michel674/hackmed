import graphql from "babel-plugin-relay/macro";

export const tagRelatedMaterials = graphql`
  query tagRelatedMaterialsQuery($material_id: Int!) {
    tags(where: { material_id: { _eq: $material_id } }) {
      tag {
        _id
        name
        tags_aggregate(
          where: { material_id: { _neq: $material_id } }
          limit: 5
          distinct_on: material_id
        ) {
          nodes {
            material {
              _id
              title
              thumbnail
              views
              duration
            }
          }
        }
      }
    }
  }
`;
