import React from "react";
import { useMutation } from "relay-hooks";
import { Loader } from "../../../components/loader.component";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { CategoryListShimmer } from "../../../components/shimmers.component";
import { useFavoriteHook } from "../../../hooks/use-favorite";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../../relay";
import { articleContainerQuery } from "./__generated__/articleContainerQuery.graphql";
import { articleContainer } from "./article-container.query";
import { ArticleReader } from "./article-reader.component";
import { markAsComplete } from "./mark-as-complete-mutation";

export const ArticleContainer: React.FC = () => {
  const {
    idFromParams: material_id,
    id: student_id,
  } = useGetParamsAndStudentId();
  const [article, setArticle] = React.useState<Content>();
  const [favoritesNumber, setFavoritesNumber] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState<boolean>(false);

  const queryVariables = {
    material_id,
    student_id,
  };

  const { data, err, loading, retry } = useQueryHook<articleContainerQuery>(
    articleContainer,
    queryVariables,
    { fetchPolicy: "network-only" }
  );

  const [markComplete] = useMutation(markAsComplete);

  const config = {
    variables: queryVariables,
  };

  const { isFavorite, handleFavorite } = useFavoriteHook(
    queryVariables,
    favoritesNumber,
    setFavoritesNumber
  );

  React.useEffect(() => {
    const timeComponentMounted = Date.now();
    return () => {
      const timeComponentWillUnMount = Date.now();
      const timeSpentInSeconds =
        (timeComponentWillUnMount - timeComponentMounted) / 1000;
      if (timeSpentInSeconds > 120) {
        markComplete(config);
      }
    };
  }, [config, markComplete]);

  interface Content {
    content: { text: string };
    _id: number;
  }

  React.useEffect(() => {
    if (data && data?.material.length > 0) {
      setArticle(data.material[0] as Content);

      if (data.material[0].student_material_histories.length > 0) {
        data.material[0].student_material_histories[0].progress === 100 &&
          setIsComplete(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleComplete = () => {
    markComplete(config);
    setIsComplete(!isComplete);
  };

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      shimmer={<Shimmer />}
      retry={retry}
    >
      <ArticleReader
        key={article?._id}
        text={article?.content.text}
        favorites={favoritesNumber}
        handleFavorite={handleFavorite}
        isFavorite={isFavorite}
        isComplete={isComplete}
        setComplete={handleComplete}
      />
    </LoadingState>
  );
};
