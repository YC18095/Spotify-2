//The login page need to be render on the server
import { getProviders, signIn } from "next-auth/react";
export default function Login({ providers }) {
  console.log("PROVIDER FROM NEXT AUTHEN", providers);

  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      <div key={providers.spotify.name}>
        <button
          className="bg-[#18D860] text-white p-5"
          onClick={() =>
            signIn(providers.spotify.id, {
              callbackUrl: "/",
            })
          }
        >
          Login with {providers.spotify.name}
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
