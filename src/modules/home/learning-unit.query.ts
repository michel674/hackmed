import graphql from "babel-plugin-relay/macro";

export const learningUnit = graphql`
  query learningUnitQuery($class_id: Int){
    learning_unit {
      _id
      category
      image
      name
      materials {
        _id
      }
    }
    category {
      _id
      name
    }
    learning_unity_release(where: {class: {_eq: $class_id}}) {
      learning_unit_liberation_date
      learning_unit
    }
  }
`;
