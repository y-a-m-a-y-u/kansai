import ReactPlayer from "react-player";
import Loading from "./Loading";

interface SimpleVideoPlayerProps {
  videoUrl: string;
  isLoop?: boolean;
  isAutoPlay?: boolean;
  isControls?: boolean;
  Volume?: number;
  Width?: number;
}

export const SimpleVideoPlayer = ({
  videoUrl,
  isLoop,
  isAutoPlay,
  isControls,
  Volume,
}: SimpleVideoPlayerProps) => {
  return (
      <ReactPlayer
        url={videoUrl}
        width={window.innerWidth}
        height={window.innerWidth * 9 / 16}
        playing={isLoop} // 自動再生
        loop={isAutoPlay} // ループ再生
        controls={isControls} // 動画の操作が可能かどうか
        volume={Volume}
      />
  );
};