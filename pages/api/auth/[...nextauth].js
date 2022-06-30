import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log("REFRESHED TOKEN IS DONE", refreshedAccessToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpired: refreshedToken.expires_in * 1000 + Date.now(), // set token expired after 1 hour from Spotify Api
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      // clientId: "7dad5a7472ba4671b88bce8ac801886c",
      // clientSecret: "c7e6793f5e7842af8525dd802e280322",
      // authorization: LOGIN_URL,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: NEXT_PUBLIC_CLIENT_SECRECT,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],

  secret: "some_super_secret_value",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      //initial sign in
      if (account && user) {
        console.log("INNIT");
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpired: account.expires_at * 1000,
        };
      }

      //return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpired) {
        console.log("NOT EXPIRED");
        return token;
      }

      //Access token has expired, so we need to refresh it
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      (session.user.accessToken = token.accessToken),
        (session.user.refreshToken = token.refreshToken),
        (session.user.username = token.username);

      return session;
    },
  },
});
