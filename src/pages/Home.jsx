import Scene from "../components/Scene";

export default function Home({ setIsLoading }) {
  return (
    <div className="w-full h-screen relative">
      <Scene setIsLoading={setIsLoading} />
      <div className="h-screen"></div>
    </div>
  );
}
