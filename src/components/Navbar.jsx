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
    { to: "/", label: "Resume", angle: Math.PI / 2, radius: 30 }, // Added radius for sphere
    { to: "/about", label: "About", angle: (6 * Math.PI) / 6, radius: 30 }, // Added radius for sphere
    { to: "/projects", label: "Projects", angle: (12 * Math.PI) / 6, radius: 30 }, // Added radius for sphere
    { to: "/contact", label: "Contact", angle: (3 * Math.PI) / 2, radius: 30 }, // Added radius for sphere
  ];

  return (
    <header className="fixed inset-0 pointer-events-none z-50">
      <nav className="w-full h-full relative">
        {navItems.map(({ to, label, angle, radius }) => {
          const { x, y } = calculatePosition(angle);
          return (
            <div
              key={to}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, #ffffff, #a0a0a0)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <NavLink
                to={to}
                className="text-3xl bg-transparent text-black no-underline pointer-events-auto transition-all duration-100 ease-linear"
              >
                {label}
              </NavLink>
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
