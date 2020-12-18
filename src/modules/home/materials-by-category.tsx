import React from "react";
import { Col, Row } from "../../components/grid.component";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { CategoriesId } from "../../models/integration-constants";
import { useQueryHook } from "../../relay";
import { learningUnitQuery } from "./__generated__/learningUnitQuery.graphql";
import { ContentCard } from "./content-card.component";
import { learningUnit } from "./learning-unit.query";
import { ContentListShimmer } from "./shimmers-card.component";

// const query = graphql`
//   query materialsByCategoryQuery($category_id: Int, $material_type: Int) {
//     category(where: { _id: { _eq: $category_id } }) {
//       learning_units {
//         materials(where: { material_type: { _eq: $material_type } }) {
//           _id
//           created_at
//           duration
//           material_type
//           views
//           title
//           thumbnail
//         }
//       }
//     }
//   }
// `;

interface MaterialTypesContainerProps {
  materialType: number;
  materialOrder: { value: string; label: string };
  category?: CategoriesId;
}

export const MaterialsByCategory: React.FC<MaterialTypesContainerProps> = ({
  materialType,
  category,
}): any => {
  const categoryId = category ? category : null;
  const { data, err, loading, retry } = useQueryHook<learningUnitQuery>(
    learningUnit
    /*     {
      category_id: categoryId,
      material_type: materialType,
    } */
  );

  // const convertToDate = (date: any) => {
  //   return new Date(date as string).getTime();
  // };

  // const renderMaterialsWithFilters = () => {
  //   const materials = data?.category.flatMap((Category) =>
  //     Category.learning_units.flatMap((materiall) =>
  //       materiall.materials.flatMap((material) => material)
  //     )
  //   );

  // const order = materialOrder.value;
  // let sortedMaterial;

  // if (order === HomePageMaterialOrder.views) {
  //   sortedMaterial = materials?.sort((a, b) => b.views - a.views);
  // } else if (order === HomePageMaterialOrder.date) {
  //   sortedMaterial = materials?.sort(
  //     (a, b) => convertToDate(b.created_at) - convertToDate(a.created_at)
  //   );
  // } else {
  //   sortedMaterial = materials;
  // }

  //   return (
  //     <Row>
  //       {sortedMaterial?.map((material) => (
  //         <Col
  //           desktop={4}
  //           tablet={6}
  //           mobile={12}
  //           horizontalAlign="center"
  //           key={material._id}
  //         >
  //           <ContentCard
  //             key={Number(material._id)}
  //             id={Number(material._id)}
  //             title={String(material.title)}
  //             imageUrl={String(material.thumbnail)}
  //             views={Number(material.views)}
  //             duration={Number(material.duration)}
  //           />
  //         </Col>
  //       ))}
  //     </Row>
  //   );
  // };
  // const shimmer = <ContentListShimmer />;

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      shimmer={<ContentListShimmer />}
      retry={retry}
    >
      <Row>
        {data?.learning_unit.map((LA) => (
          <Col
            key={LA._id}
            desktop={4}
            tablet={6}
            mobile={12}
            horizontalAlign="center"
          >
            <ContentCard
              id={LA._id}
              title={String(LA.name)}
              imageUrl={String(LA.image)}
              materialsAmount={Number(LA.materials.length)}
            />
          </Col>
        ))}
      </Row>
    </LoadingState>
  );
};
