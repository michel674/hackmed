import graphql from "babel-plugin-relay/macro";

export const categories = graphql`
  query categoriesQuery {
    category {
      _id
      name
      image
    }
  }
`;
