const Navbar = () => {
  return (
    <div className="flex flex-col justify-between items-stretch text-white h-screen w-screen p-20 text-6xl">
      <div className="flex justify-between">
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex justify-between">
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Navbar