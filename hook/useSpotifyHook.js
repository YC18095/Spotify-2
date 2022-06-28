import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "7dad5a7472ba4671b88bce8ac801886c",
  clientSecret: "c7e6793f5e7842af8525dd802e280322",
});

export default function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      //If refresh access token attepmt fails, direct user to login
      if (session.error == "RefreshAccessTokenError") {
        signIn();
      }
    }

    spotifyApi.setAccessToken(session?.user.accessToken);
  }, [session]);

  return spotifyApi;
}
