import { getSession } from "next-auth/react";
import Head from "next/head";
import Center from "../components/Center";
import Player from "../components/Player";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div className="bg-black h-screen over">
      <Head>
        <title>Spotify-2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <SideBar />
        <Center />
        {/* center */}
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

// Fix initial image of center playlist
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}