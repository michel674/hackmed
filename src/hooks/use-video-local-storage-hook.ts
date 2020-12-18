interface VideoSettings {
  video: number;
  time: number;
}

export const useVideoLocalStorage = (): any => {
  const saveProgressToLocalStorage = (state, id) => {
    const time = Math.trunc(state.playedSeconds);
    const videoId = id;
    const videoSettings: VideoSettings = {
      time: time,
      video: videoId,
    };
    if (time % 5 === 0 && time !== 0) {
      localStorage.setItem(`video${videoId}`, JSON.stringify(videoSettings));
    }
  };

  const getSavedVideoDataFromStorage = (id) => {
    const videoSettingsString = localStorage.getItem(`video${id}`);
    if (videoSettingsString !== null) {
      const videoSettings: VideoSettings = JSON.parse(videoSettingsString);
      return videoSettings;
    }
  };

  return { saveProgressToLocalStorage, getSavedVideoDataFromStorage };
};
