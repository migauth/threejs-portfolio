import "./Loading.css";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <p className="text-2xl  text-yellow-300">Loading</p>
        <br />
        <div className="loader mt-2"></div>
      </div>
    </>
  );
}
