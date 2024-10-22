import "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <p className="text-2xl font-mono">Loading</p>
        <span className="loader"></span>
      </div>
    </>
  );
}
