import React, { Dispatch, SetStateAction } from "react";
import AliceCarousel from "react-alice-carousel";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { PrimaryCard } from "../../components/primary-card.component";
import { CategoryListShimmer } from "../../components/shimmers.component";
import { useQueryHook } from "../../relay/use-query.hook";
import { categoriesQuery } from "./__generated__/categoriesQuery.graphql";
import { categories } from "./categories.query";
import "react-alice-carousel/lib/alice-carousel.css";

interface CategoriesProps {
  onSelectCategory: Dispatch<SetStateAction<number | undefined>>;
}
export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const { data, retry, err, loading } = useQueryHook<categoriesQuery>(
    categories
  );

  const responsive = {
    600: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  return (
    <LoadingState
      loading={loading}
      data={data}
      error={err}
      retry={retry}
      shimmer={<CategoryListShimmer />}
    >
      <AliceCarousel
        touchTracking
        autoPlay
        autoPlayInterval={3000}
        responsive={responsive}
        disableButtonsControls
        animationDuration={1000}
        items={data?.category.map((category) => (
          <PrimaryCard
            title={String(category.name)}
            imageUrl={String(category.image)}
            id={Number(category._id)}
            key={Number(category._id)}
            onClick={onSelectCategory}
          />
        ))}
      />
    </LoadingState>
  );
};
