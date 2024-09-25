import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      setRotation((prev) => (prev + 0.005) % (2 * Math.PI)); // Adjusted rotation speed
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const radius = Math.min(windowSize.width, windowSize.height) * 0.4; // Constant radius
  const center = { x: windowSize.width / 2, y: windowSize.height / 2 };

  const calculatePosition = (angle) => {
    const x = center.x + radius * Math.cos(angle + rotation);
    const y = center.y + radius * Math.sin(angle + rotation);
    return { x, y };
  };

  const navItems = [
    { to: "/", label: "Resume", angle: Math.PI / 2 },
    { to: "/about", label: "About", angle: (6 * Math.PI) / 6 }, // Adjusted angle
    { to: "/projects", label: "Projects", angle: (12 * Math.PI) / 6 }, // Adjusted angle
    { to: "/contact", label: "Contact", angle: (3 * Math.PI) / 2 },
  ];

  return (
    <header className="fixed inset-0 pointer-events-none z-50">
      <nav className="w-full h-full relative">
        {navItems.map(({ to, label, angle }) => {
          const { x, y } = calculatePosition(angle);
          return (
            <NavLink
              key={to}
              to={to}
              className="text-3xl absolute p-2 bg-transparent text-yellow-500 no-underline pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              {label}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
