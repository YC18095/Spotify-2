import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

export default function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song track={track} order={i} />
        // <div key={track.track?.name}>{track.track?.name || "No song"}</div>
      ))}
    </div>
  );
}
