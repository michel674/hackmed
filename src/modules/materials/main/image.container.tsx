import React from "react";
import { useMutation } from "relay-hooks";
import { useAuthContext } from "../../../app/auth-provider/auth.provider";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useFavoriteHook } from "../../../hooks/use-favorite";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../../relay";
import { imageQuery } from "./__generated__/imageQuery.graphql";
import { markImageAsCompleteMutation } from "./__generated__/markImageAsCompleteMutation.graphql";
import { ImageDisplay } from "./image-display.component";
import { image } from "./image.query";
import { markImageAsComplete } from "./mark-image-as-complete.mutation";

export const ImageContainer: React.FC = () => {
  const { idFromParams: material_id } = useGetParamsAndStudentId();

  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { id: student_id } = getUserIdAndInfoFromStorage();

  const [favoritesNumber, setFavoritesNumber] = React.useState(0);

  const queryVariables = {
    material_id,
    student_id,
  };
  const { data, err, loading, retry } = useQueryHook<imageQuery>(
    image,
    queryVariables,
    { fetchPolicy: "network-only" }
  );

  interface Content {
    image: string;
  }

  const [isComplete, setIsComplete] = React.useState<boolean>(false);
  const [imgUrl, setImgUrl] = React.useState<Content>({} as Content);

  const config = {
    variables: {
      material_id: queryVariables.material_id,
      student_id,
    },
  };

  const { isFavorite, handleFavorite } = useFavoriteHook(
    queryVariables,
    favoritesNumber,
    setFavoritesNumber
  );

  React.useEffect(() => {
    if (data && data?.material.length > 0) {
      setImgUrl(data?.material[0].content as Content);
      if (data?.material[0].student_material_histories.length > 0) {
        data?.material[0].student_material_histories[0].progress === 100 &&
          setIsComplete(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const [markAsCompleteMutation] = useMutation<markImageAsCompleteMutation>(
    markImageAsComplete,
    config
  );

  const markComplete = () => {
    setIsComplete(!isComplete);

    markAsCompleteMutation(config);
  };

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      retry={retry}
      shimmer={<Shimmer />}
    >
      <>
        {data?.material && (
          <ImageDisplay
            imageUrl={imgUrl && imgUrl.image}
            key={data.material[0]._id}
            type="roadmap"
            favorites={favoritesNumber}
            handleComplete={markComplete}
            isComplete={isComplete}
            handleFavorite={handleFavorite}
            isFavorite={isFavorite}
          />
        )}
      </>
    </LoadingState>
  );
};
