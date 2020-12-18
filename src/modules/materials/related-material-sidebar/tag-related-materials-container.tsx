import React from "react";
import { Hbox } from "../../../components/hbox-component.style";
import { H2 } from "../../../components/typography.style";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../../relay";
import { RelatedMaterialColumnStyled } from "../grid-material-page.component.style";
import { tagRelatedMaterialsQuery } from "./__generated__/tagRelatedMaterialsQuery.graphql";
import { RelatedMaterialCard } from "./related-material-card.component";
import { tagRelatedMaterials } from "./tag-related-materials.query";

export const TagRelatedMaterialsContainer: React.FC = () => {
  const { idFromParams: material_id } = useGetParamsAndStudentId();

  const queryVariables = {
    material_id,
  };
  const { data } = useQueryHook<tagRelatedMaterialsQuery>(
    tagRelatedMaterials,
    queryVariables
  );

  return (
    <RelatedMaterialColumnStyled hide={data?.tags.length === 0}>
      <Hbox>
        <Hbox.Item hAlign="center">
          <H2>Materiais relacionados</H2>
        </Hbox.Item>
      </Hbox>
      {data?.tags.flatMap((tag) =>
        tag.tag.tags_aggregate.nodes.flatMap((material) => (
          <RelatedMaterialCard
            imageUrl={String(material.material.thumbnail)}
            viewsNumber={Number(material.material.views)}
            materialTimeDuration={Number(material.material.duration)}
            materialTitle={String(material.material.title)}
            materialId={Number(material.material._id)}
          />
        ))
      )}
    </RelatedMaterialColumnStyled>
  );
};
