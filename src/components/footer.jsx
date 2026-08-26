const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Accueil", href: "index.html" },
    { label: "À propos", href: "about.html" },
    { label: "Expertise", href: "expertise.html" },
    { label: "Approche", href: "approach.html" },
    { label: "Expérience", href: "experience.html" },
    { label: "Insights", href: "insights.html" },
    { label: "FAQ", href: "index.html#faq" },
    { label: "Contact", href: "contact.html" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
    },
  ];

  const legalLinks = [
    {
      label: "Mentions légales",
      href: "#",
    },
    {
      label: "Politique de confidentialité",
      href: "#",
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-text
        px-6
        pt-20
        pb-8
        sm:px-8
        md:px-10
        md:pt-24
      "
    >
      {/* ================= DECORATIVE ELEMENT ================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          border
          border-gold/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          border
          border-sage/5
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* ================= MAIN FOOTER ================= */}
        <div
          className="
            grid
            gap-14
            animate-fade-up
            md:grid-cols-4
            md:gap-10
            lg:gap-16
          "
        >

          {/* ================= BRAND ================= */}
          <div className="md:col-span-2">

            <a
              href="index.html"
              className="
                group
                inline-block
              "
              aria-label="Meriem Tahiri Joutei - Accueil"
            >
              <p
                className="
                  font-serif
                  text-2xl
                  font-medium
                  tracking-wide
                  text-background
                  transition-colors
                  duration-300
                  group-hover:text-gold
                  sm:text-3xl
                "
              >
                MERIEM TAHIRI JOUTEI
              </p>

              <div className="mt-3 flex items-center gap-3">

                <span
                  className="
                    h-px
                    w-8
                    bg-gold
                    transition-all
                    duration-500
                    group-hover:w-14
                  "
                />

                <span
                  className="
                    font-sans
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-gold
                  "
                >
                  Executive Coach
                </span>

              </div>
            </a>

            <p
              className="
                mt-8
                max-w-sm
                font-sans
                text-sm
                leading-7
                text-background/45
              "
            >
              Accompagner les dirigeants, managers et talents dans leurs
              enjeux de leadership, de transformation et d'évolution
              professionnelle.
            </p>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div>

            <p
              className="
                mb-6
                font-sans
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-background/35
              "
            >
              Navigation
            </p>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">

              {navigationLinks.map((link) => (
                <li key={link.label}>

                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      font-sans
                      text-sm
                      text-background/65
                      transition-colors
                      duration-300
                      hover:text-gold
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-gold
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    <span>
                      {link.label}
                    </span>
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* ================= SOCIAL + LEGAL ================= */}
          <div>

            {/* Suivre */}
            <p
              className="
                mb-6
                font-sans
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-background/35
              "
            >
              Suivre
            </p>

            <ul className="space-y-3">

              {socialLinks.map((link) => (
                <li key={link.label}>

                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      font-sans
                      text-sm
                      text-background/65
                      transition-colors
                      duration-300
                      hover:text-gold
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        border
                        border-background/15
                        text-[10px]
                        transition-all
                        duration-300
                        group-hover:border-gold
                        group-hover:bg-gold
                        group-hover:text-white
                      "
                    >
                      in
                    </span>

                    <span>
                      {link.label}
                    </span>
                  </a>

                </li>
              ))}

            </ul>

            {/* Legal */}
            <p
              className="
                mb-6
                mt-10
                font-sans
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-background/35
              "
            >
              Légal
            </p>

            <ul className="space-y-3">

              {legalLinks.map((link) => (
                <li key={link.label}>

                  <a
                    href={link.href}
                    className="
                      font-sans
                      text-sm
                      text-background/65
                      transition-colors
                      duration-300
                      hover:text-gold
                    "
                  >
                    {link.label}
                  </a>

                </li>
              ))}

            </ul>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-8
            animate-fade-in
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              font-sans
              text-[10px]
              leading-relaxed
              tracking-wide
              text-background/30
              sm:text-xs
            "
          >
            © {currentYear} Meriem Tahiri Joutei. Tous droits réservés.
          </p>

          <p
            className="
              font-sans
              text-[10px]
              leading-relaxed
              tracking-wide
              text-background/30
              sm:text-xs
              sm:text-right
            "
          >
            Site conçu comme démonstration front-end.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;