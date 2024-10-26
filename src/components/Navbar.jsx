export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed gap-4 flex flex-col text-4xl w-full z-10 bg-purple-500 p-4 items-start opacity-95 sm:flex-row">
        <h1 id="logo" className="pr-4">
          <a href="#" onClick={scrollToTop}>Michael Gauthier</a>
        </h1>
        <button className="pr-4">
          <a href="#about">About</a>
        </button>
        <button className="pr-4">
          <a href="#cv">CV</a>
        </button>
        <button className="pr-4">
          <a href="#contact">Contact</a>
        </button>
      </nav>
    </>
  );
}
