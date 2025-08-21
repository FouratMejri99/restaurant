import { useEffect, useRef, useState } from "react";

/**
 * App wrapper for all script.js logic
 */
const ScriptWrapper = ({ children }) => {
  const preloaderRef = useRef(null);
  const headerRef = useRef(null);
  const backTopRef = useRef(null);
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const heroSliderRef = useRef(null);
  const heroSliderItemsRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Preloader
  useEffect(() => {
    const handleLoad = () => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add("loaded");
        document.body.classList.add("loaded");
      }
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // ✅ Navbar toggle
  useEffect(() => {
    const toggleNavbar = () => {
      if (navbarRef.current && overlayRef.current) {
        navbarRef.current.classList.toggle("active");
        overlayRef.current.classList.toggle("active");
        document.body.classList.toggle("nav-active");
      }
    };

    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    navTogglers.forEach((btn) => btn.addEventListener("click", toggleNavbar));

    return () =>
      navTogglers.forEach((btn) =>
        btn.removeEventListener("click", toggleNavbar)
      );
  }, []);

  // ✅ Header + back-top-btn scroll effect
  useEffect(() => {
    let lastScrollPos = 0;

    const handleScroll = () => {
      if (window.scrollY >= 50) {
        headerRef.current?.classList.add("active");
        backTopRef.current?.classList.add("active");

        const isScrollBottom = lastScrollPos < window.scrollY;
        if (isScrollBottom) {
          headerRef.current?.classList.add("hide");
        } else {
          headerRef.current?.classList.remove("hide");
        }
        lastScrollPos = window.scrollY;
      } else {
        headerRef.current?.classList.remove("active");
        backTopRef.current?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Hero Slider

  // ✅ Parallax effect
  useEffect(() => {
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");
    const handleMove = (event) => {
      let x = (event.clientX / window.innerWidth) * 10 - 5;
      let y = (event.clientY / window.innerHeight) * 10 - 5;
      x = -x;
      y = -y;

      parallaxItems.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed || 1);
        el.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Preloader */}
      <div data-preaload ref={preloaderRef}></div>

      {/* Header */}
      <header data-header ref={headerRef}>
        {/* your header content */}
      </header>

      {/* Navbar */}
      <nav data-navbar ref={navbarRef}>
        {/* nav items */}
      </nav>
      <div data-overlay ref={overlayRef}></div>

      {/* Hero Slider */}
      <div data-hero-slider ref={heroSliderRef}>
        {[1, 2, 3].map((n, i) => (
          <div
            key={i}
            data-hero-slider-item
            ref={(el) => (heroSliderItemsRef.current[i] = el)}
            className={i === 0 ? "active" : ""}
          >
            Slide {n}
          </div>
        ))}
        <button data-prev-btn>Prev</button>
        <button data-next-btn>Next</button>
      </div>

      {/* Back to top */}
      <button data-back-top-btn ref={backTopRef}>
        ↑
      </button>

      {/* Render children (your real app content) */}
      {children}
    </>
  );
};

export default ScriptWrapper;
