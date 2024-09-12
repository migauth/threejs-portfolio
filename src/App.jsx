import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-slate-900 h-screen w-screen">
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </div>
    </main>
  );
}

export default App;
