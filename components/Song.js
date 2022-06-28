import { useRecoilState } from "recoil";
import useSpotify from "../hook/useSpotifyHook";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";

const millisToMinutes = (millis) => {
  //1 second = 1000 miliseconds
  const minutes = Math.floor(millis / (1000 * 60));
  const seconds = ((millis % 60000) / 1000).toFixed(0);

  return seconds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export default function Song({ track, order }) {
  const spotifyApi = useSpotify();
  const [isPlayingSong, setIsPlayingSong] = useRecoilState(isPlayingState);
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);

  const playSong = () => {
    setCurrentTrackId(track.track.id);
    setIsPlayingSong(true);
    spotifyApi.play({
      uris: [track.track.uri],
    });
  };
  return (
    <div
      className="grid grid-cols-2 pt-5 hover:bg-gray-900 py-4 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className=" flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track?.album.images[0].url}
          alt={track.track?.name}
        />
        <div>
          <p>{track.track?.name}</p>
          <p>{track.track?.artists[0].name}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pr-5">
        <p className="hidden md:inline">
          {track.track?.album.name || "No Album"}
        </p>
        <p>{millisToMinutes(track.track?.duration_ms)}</p>
      </div>
    </div>
  );
}
