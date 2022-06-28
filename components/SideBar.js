import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  SearchIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "../hook/useSpotifyHook";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

export default function SideBar() {
  const spotify = useSpotify();
  const { data: session, status } = useSession();
  const [playLists, setPlayLists] = useState([]);
  const [playListId, setPlayListId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotify.getAccessToken()) {
      spotify
        .getUserPlaylists()
        .then((data) => {
          setPlayLists(data.body.items);
          playLists?.forEach((item) => {
            item.isActive = false;
          });
        })
        .catch((error) => {
          return error;
        });
    }
  }, [spotify, session]);

  const setActiveSideBar = (playlist) => {
    setPlayListId(playlist.id);
    playLists.forEach((item) => {
      if (item.id === playlist.id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  };

  console.log("Playlists", playLists);
  return (
    <div
      className="text-gray-500 text-sm p-5 border-r border-gray-900 overflow-y-scroll scrollbar-hide 
    h-screen text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex "
    >
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900 " />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Song</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <WifiIcon className="h-5 w-5" />
          <p>Your Espisodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900 " />

        {playLists.map((playlist) => (
          <p
            onClick={() => setActiveSideBar(playlist)}
            key={playlist.id}
            className={`flex cursor-pointer items-center space-x-2 hover:text-white ${
              playlist.isActive ? "text-white" : ""
            }`}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}
