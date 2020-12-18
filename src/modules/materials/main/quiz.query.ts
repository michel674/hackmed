import graphql from "babel-plugin-relay/macro";

export const quiz = graphql`
  query quizQuery {
    material(where: { _id: { _eq: 20 } }) {
      content
    }
  }
`;
