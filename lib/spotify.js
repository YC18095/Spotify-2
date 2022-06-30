import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-follow-modify",
  "user-follow-read",
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-read-email",
  "user-read-private",
  //   "user-library-modify",
  "user-library-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
  // clientId: "7dad5a7472ba4671b88bce8ac801886c",
  // clientSecret: "c7e6793f5e7842af8525dd802e280322",
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRECT
});

export default spotifyApi;

export { LOGIN_URL };
