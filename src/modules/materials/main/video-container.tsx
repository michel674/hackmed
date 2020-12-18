import React from "react";
import ReactPlayer from "react-player";
import { useMutation } from "relay-hooks";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useVideoLocalStorage } from "../../../hooks/use-video-local-storage-hook";
import { useQueryHook } from "../../../relay";
import { updateProgressIntoDbMutation } from "./__generated__/updateProgressIntoDbMutation.graphql";
import { videoQuery } from "./__generated__/videoQuery.graphql";
import { addPauseMutation } from "./add-pause-mutation";
import { updateProgressIntoDb } from "./update-progress-into-db";
import { video } from "./video.query";

export const VideoContainer: React.FC = () => {
  const { idFromParams: material_id, id } = useGetParamsAndStudentId();
  const queryVariables = {
    material_id,
  };
  const playerRef = React.useRef<ReactPlayer | null>(null);

  const {
    getSavedVideoDataFromStorage,
    saveProgressToLocalStorage,
  } = useVideoLocalStorage();

  const { data, err, loading, retry } = useQueryHook<videoQuery>(
    video,
    queryVariables
  );

  const [increasePause] = useMutation(addPauseMutation);

  const [shouldVideoUpdate, setShouldVideoUpdate] = React.useState<boolean>(
    false
  );

  const [updateProgress] = useMutation<updateProgressIntoDbMutation>(
    updateProgressIntoDb
  );

  const handlePause = () => {
    const config = {
      variables: {
        material_id: queryVariables.material_id,
        student_id: id,
      },
    };
    increasePause(config);
  };

  interface ContentType {
    video: string;
  }

  React.useEffect(() => {
    if (data && data?.material[0].student_material_histories.length > 0) {
      setShouldVideoUpdate(
        data?.material[0].student_material_histories[0].progress === 100
          ? false
          : true
      );
    }
  }, [data]);

  const saveProgressToDatabase = (state) => {
    if (shouldVideoUpdate) {
      const presentTimeInSeconds = Math.trunc(state.playedSeconds);
      const durationInSeconds = Number(playerRef.current?.getDuration?.());
      const percentage: number =
        (presentTimeInSeconds / durationInSeconds) * 100;
      const progress = percentage >= 90 ? 100 : Math.trunc(percentage);

      const isComplete = percentage > 91 ? false : true;

      if ((presentTimeInSeconds % 30 === 0 || progress === 100) && isComplete) {
        const config = {
          variables: {
            material_id: queryVariables.material_id,
            student_id: id,
            progress: progress,
          },
        };
        updateProgress(config);
      }
    }
  };

  const handleReady = () => {
    const getSavedTime = () => {
      const videoSettings = getSavedVideoDataFromStorage(material_id);
      if (videoSettings && videoSettings.video === material_id) {
        return videoSettings.time;
      } else {
        return 0;
      }
    };

    const timeInSeconds = getSavedTime();
    if (playerRef.current) {
      playerRef.current.seekTo(timeInSeconds);
    }
  };

  const handleProgress = (state) => {
    saveProgressToLocalStorage(state, material_id);

    if (shouldVideoUpdate) {
      saveProgressToDatabase(state);
    }
  };

  const halfSecondTimer = 500;

  const videoContent = data?.material[0].content as ContentType;

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      shimmer={<Shimmer />}
      retry={retry}
    >
      <ReactPlayer
        ref={playerRef}
        url={videoContent?.video}
        onReady={handleReady}
        controls
        width="100%"
        onPause={handlePause}
        progressInterval={halfSecondTimer}
        onProgress={(state) => handleProgress(state)}
        volume={0.2}
      />
    </LoadingState>
  );
};
