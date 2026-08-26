import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "#about" },
  { label: "Expertise", path: "#expertise" },
  { label: "Approche", path: "#approach" },
  { label: "Expérience", path: "#experience" },
  { label: "Insights", path: "#insights" },
  { label: "FAQ", path: "#faq" },
  { label: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* =====================================================
     SCROLL STATE
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     SCROLL SPY
  ===================================================== */

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = navItems
      .filter((item) => item.path.startsWith("#"))
      .map((item) =>
        document.getElementById(item.path.substring(1))
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        root: null,

        /*
         * Navbar area excluded from detection.
         * This makes the active section more stable.
         */
        rootMargin: "-20% 0px -60% 0px",

        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  /* =====================================================
     MOBILE BODY SCROLL
  ===================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
     ESCAPE
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavigation = (path) => {
    setIsOpen(false);

    /* -----------------------------------------------
       HOME
    ------------------------------------------------ */

    if (path === "/") {
      if (location.pathname === "/") {
        setActiveSection(null);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        navigate("/");
      }

      return;
    }

    /* -----------------------------------------------
       SECTION
    ------------------------------------------------ */

    if (path.startsWith("#")) {
      const sectionId = path.substring(1);

      /*
       * Already on homepage
       */
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);

        if (element) {
          setActiveSection(path);

          /*
           * Account for fixed navbar
           */
          const navbarHeight = 90;

          const elementPosition =
            element.getBoundingClientRect().top +
            window.scrollY;

          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }

        return;
      }

      /*
       * Coming from another route
       */
      navigate(`/${path}`);
    }
  };

  /* =====================================================
     ACTIVE STATE
  ===================================================== */

  const isActive = (path) => {
    /*
     * Home
     */
    if (path === "/") {
      return (
        location.pathname === "/" &&
        activeSection === null
      );
    }

    /*
     * Sections
     */
    if (path.startsWith("#")) {
      return (
        location.pathname === "/" &&
        activeSection === path
      );
    }

    return false;
  };

  return (
    <>
      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ease-out

          ${
            scrolled
              ? `
                border-b
                border-text/5
                bg-background/95
                shadow-[0_10px_40px_rgba(37,48,45,0.06)]
                backdrop-blur-xl
              `
              : `
                bg-background/90
                backdrop-blur-xl

                lg:border-transparent
                lg:bg-transparent
                lg:backdrop-blur-none
              `
          }
        `}
      >
        <nav
          className={`
            mx-auto
            flex
            max-w-[1440px]
            items-center
            justify-between
            gap-4
            px-5
            sm:px-7
            md:px-10
            lg:px-12

            transition-all
            duration-500

            ${
              scrolled
                ? "py-3"
                : "py-4 sm:py-5 md:py-6"
            }
          `}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            onClick={() => handleNavigation("/")}
            aria-label="Meriem Tahiri Joutei - Accueil"
            className="
              group
              relative
              min-w-0
              max-w-[calc(100%-60px)]
              shrink
              text-left
              outline-none
            "
          >
            {/* Name */}

            <span
              className="
                block
                truncate
                font-serif
                text-[13px]
                font-medium
                leading-tight
                tracking-[0.06em]
                text-text
                transition-colors
                duration-300

                sm:text-[16px]
                sm:tracking-[0.07em]

                md:text-[19px]
                md:tracking-[0.08em]

                group-hover:text-gold
              "
            >
              MERIEM TAHIRI JOUTEI
            </span>

            {/* Subtitle */}

            <span
              className="
                mt-1
                block
                truncate
                font-sans
                text-[7px]
                font-medium
                uppercase
                leading-none
                tracking-[0.22em]
                text-muted
                transition-colors
                duration-300

                sm:text-[9px]
                sm:tracking-[0.25em]

                md:text-[10px]
                md:tracking-[0.28em]

                group-hover:text-gold
              "
            >
              Executive Coach
            </span>

            {/* Logo underline */}

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-px
                w-0
                bg-gold
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <ul
            className="
              hidden
              items-center
              gap-5

              lg:flex
              xl:gap-7
              2xl:gap-8
            "
          >
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation(item.path)
                    }
                    className={`
                      group
                      relative
                      inline-flex
                      items-center
                      py-2
                      font-sans
                      text-[11px]
                      font-medium
                      tracking-[0.02em]
                      outline-none
                      transition-colors
                      duration-300

                      xl:text-[12px]

                      ${
                        active
                          ? "text-text"
                          : "text-muted hover:text-text"
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        -bottom-0.5
                        left-0
                        h-px
                        bg-gold
                        transition-all
                        duration-300
                        ease-out

                        ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-3
              sm:gap-4
            "
          >
            {/* Desktop CTA */}

            <Link
              to="/booking"
              className="
                group
                hidden
                items-center
                justify-center
                gap-3
                rounded-full
                bg-text
                px-5
                py-2.5
                font-sans
                text-[10px]
                font-medium
                tracking-[0.04em]
                text-white
                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-sage
                hover:text-text
                hover:shadow-[0_10px_25px_rgba(37,48,45,0.12)]

                active:translate-y-0

                md:inline-flex
                lg:px-6
                lg:py-3
                lg:text-[11px]
              "
            >
              <span>
                Prendre rendez-vous
              </span>

              <span
                className="
                  text-sm
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>

            {/* =================================================
                MOBILE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setIsOpen((prev) => !prev)
              }
              aria-label={
                isOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
              aria-expanded={isOpen}
              className="
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-light-sage
                text-text
                transition-all
                duration-300

                hover:bg-sage
                active:scale-95

                lg:hidden
              "
            >
              {/* Line 1 */}

              <span
                className={`
                  absolute
                  h-px
                  w-4
                  bg-current
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "rotate-45"
                      : "-translate-y-1.5"
                  }
                `}
              />

              {/* Line 2 */}

              <span
                className={`
                  absolute
                  h-px
                  w-4
                  bg-current
                  transition-all
                  duration-200

                  ${
                    isOpen
                      ? "scale-0 opacity-0"
                      : "scale-100 opacity-100"
                  }
                `}
              />

              {/* Line 3 */}

              <span
                className={`
                  absolute
                  h-px
                  w-4
                  bg-current
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "-rotate-45"
                      : "translate-y-1.5"
                  }
                `}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden

          transition-all
          duration-500

          ${
            isOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
        aria-hidden={!isOpen}
      >
        {/* =================================================
            OVERLAY
        ================================================= */}

        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={() => setIsOpen(false)}
          className="
            absolute
            inset-0
            cursor-default
            bg-text/20
            backdrop-blur-sm
          "
        />

        {/* =================================================
            PANEL
        ================================================= */}

        <aside
          className={`
            absolute
            right-0
            top-0
            flex
            h-dvh
            w-[88%]
            max-w-[400px]
            flex-col
            overflow-y-auto
            bg-background
            px-6
            pb-8
            pt-24
            shadow-[-20px_0_60px_rgba(37,48,45,0.12)]

            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            sm:px-8

            ${
              isOpen
                ? "translate-x-0"
                : "translate-x-full"
            }
          `}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          {/* =================================================
              MOBILE MENU HEADER
          ================================================= */}

          <div className="mb-8">
            <div
              className="
                mb-5
                h-px
                w-12
                bg-gold
              "
            />

            <div className="flex items-end justify-between">
              <div>
                <p
                  className="
                    font-sans
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-muted
                  "
                >
                  Navigation
                </p>

                <h2
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-normal
                    leading-none
                    text-text
                  "
                >
                  Explorer
                </h2>
              </div>

              <span
                className="
                  font-serif
                  text-2xl
                  font-medium
                  tracking-tight
                  text-gold
                "
              >
                MTJ
              </span>
            </div>
          </div>

          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          <ul className="border-t border-text/10">
            {navItems.map((item, index) => {
              const active = isActive(item.path);

              return (
                <li
                  key={item.label}
                  style={{
                    transitionDelay: isOpen
                      ? `${index * 45}ms`
                      : "0ms",
                  }}
                  className={`
                    transition-all
                    duration-500
                    ease-out

                    ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigation(item.path)
                    }
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      border-b
                      border-text/10
                      py-4
                      text-left
                      outline-none
                      transition-colors
                      duration-300

                      sm:py-[17px]

                      ${
                        active
                          ? "text-text"
                          : "text-muted hover:text-text"
                      }
                    `}
                  >
                    {/* Number + Label */}

                    <span className="flex items-center gap-4">
                      <span
                        className={`
                          w-5
                          font-sans
                          text-[9px]
                          tracking-[0.1em]
                          transition-colors
                          duration-300

                          ${
                            active
                              ? "text-gold"
                              : "text-muted/40 group-hover:text-gold"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          font-serif
                          text-xl
                          font-normal
                        "
                      >
                        {item.label}
                      </span>
                    </span>

                    {/* Arrow */}

                    <span
                      className="
                        text-base
                        text-gold
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <div
            className={`
              mt-8
              transition-all
              duration-500
              delay-300

              ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-text
                px-6
                py-4
                font-sans
                text-xs
                font-medium
                tracking-wide
                text-white
                transition-all
                duration-300

                hover:bg-gold
                hover:shadow-[0_10px_30px_rgba(184,155,106,0.18)]

                active:scale-[0.98]
              "
            >
              <span>
                Prendre rendez-vous
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE FOOTER BRAND
          ================================================= */}

          <div
            className="
              mt-auto
              flex
              items-end
              justify-between
              border-t
              border-text/10
              pt-6
            "
          >
            <div>
              <p
                className="
                  font-serif
                  text-base
                  text-text
                "
              >
                Meriem Tahiri Joutei
              </p>

              <p
                className="
                  mt-1
                  font-sans
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-muted
                "
              >
                Executive Coach
              </p>
            </div>

            <span
              className="
                font-serif
                text-2xl
                text-gold
              "
            >
              MTJ
            </span>
          </div>
        </aside>
      </div>
    </>
  );
}