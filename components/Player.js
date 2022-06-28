import { useRecoilState } from "recoil";
import useSpotify from "../hook/useSpotifyHook";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import useSongInfo from "../hook/useSongInfo";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";
import { debounce } from "lodash";

export default function Player() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [isPlayingSong, setIsPlayingSong] = useRecoilState(isPlayingState);
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    //refresh to get the current song playing on another device
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        setCurrentTrackId(data.body?.item.id);
      });

      spotifyApi.getMyCurrentPlaybackState().then((data) => {
        setIsPlayingSong(data.body?.is_playing);
      });
    }
  };

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlayingSong(false);
      } else {
        spotifyApi.play();
        setIsPlayingSong(true);
      }
    });
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) fetchCurrentSong();
    setVolume(50);
  }, [spotifyApi]);

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debounceAdjustVolume();
    }
  }, [volume]);

  const debounceAdjustVolume = useCallback(
    debounce(() => {
      spotifyApi.setVolume(volume);
    }, 500),
    [volume]
  );

  const onChangeVolume = (e) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className=" grid grid-cols-3 text-xs md:text-base h-24 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex items-center space-x-4">
        <img
          className="hidden md:inline h-10 w-10"
          src={songInfo?.album.images[0].url}
          alt=""
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists[0].name}</p>
        </div>
      </div>

      {/* //Center */}
      <div className="flex items-center justify-evenly">
        <SwitchHorizontalIcon className="button" />{" "}
        <RewindIcon className="button" />
        {isPlayingSong ? (
          <PauseIcon onClick={handlePlayPause} className="button w-10  h-10" />
        ) : (
          <PlayIcon onClick={handlePlayPause} className="button h-10 w-10" />
        )}
        <FastForwardIcon className="button" />
        <ReplyIcon className="button" />
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-3 md:space-x-4 pr-5">
        <VolumeOffIcon
          onClick={() => volume > 0 && setVolume(volume - 10)}
          className="button"
        />
        <input
          className="w-14 md:w-28"
          type="range"
          value={volume}
          onChange={onChangeVolume}
          min={0}
          max={100}
        />
        <VolumeUpIcon
          onClick={() => volume < 100 && setVolume(volume + 10)}
          className="button"
        />
      </div>
    </div>
  );
}
