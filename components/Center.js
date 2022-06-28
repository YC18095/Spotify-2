import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";
import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "../hook/useSpotifyHook";
import Songs from "./Songs";

const colors = [
  "from-blue-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
  "from-indigo-500",
  "from-green-500",
];

export default function Center() {
  const [color, setColor] = useState(null);
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const playListId = useRecoilValue(playlistIdState);
  const [playlist, setPlayList] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playListId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playListId)
      .then((data) => {
        setPlayList(data.body);
      })
      .catch((error) => {
        return error;
      });
  }, [spotifyApi, playListId]);

  console.log("PLAYLIST", playlist);

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide ">
      <header className="absolute top-5 right-8">
        <div
          onClick={() => signOut()}
          className="bg-green-900 p-1 pr-2 rounded-full items-center flex space-x-3  cursor-pointer opacity-90 hover:opacity-80 text-white"
        >
          <img src={session?.user.image} className="rounded-full w-10 h-10" />
          <h2 className="text-white">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white pl-10`}
      >
        <img
          className="h-40 w-44 shadow-2xl"
          src={playlist?.images[0]?.url}
          alt="abc"
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-white">{playlist?.name}</h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
}
