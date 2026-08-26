const Expertise = () => {
  const expertise = [
    {
      number: "01",
      title: "Executive Coaching",
      description:
        "Accompagner les dirigeants et cadres dans leurs enjeux professionnels et leurs moments de transition.",
    },
    {
      number: "02",
      title: "Leadership",
      description:
        "Développer une posture de leadership authentique, consciente et impactante.",
    },
    {
      number: "03",
      title: "Human Capital",
      description:
        "Développer les talents et renforcer l'engagement autour des enjeux humains de l'organisation.",
    },
    {
      number: "04",
      title: "Career Development",
      description:
        "Accompagner les évolutions, transitions et décisions importantes de carrière.",
    },
    {
      number: "05",
      title: "Communication",
      description:
        "Développer une communication claire, influente et adaptée aux enjeux du leadership.",
    },
  ];

  return (
    <section id="expertise" className="border-t border-text/10 px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}
        <div
          className="
            animate-fade-up
            mb-12 flex flex-col gap-6
            md:mb-14 md:flex-row md:items-end md:justify-between
          "
        >
          <div>
            <p
              className="
                font-sans text-xs font-medium uppercase
                tracking-[0.25em] text-gold
              "
            >
              Domaines d'expertise
            </p>

            <h2
              className="
                mt-4 max-w-xl
                font-serif text-3xl font-medium
                leading-tight text-text
                sm:text-4xl
              "
            >
              Un accompagnement centré sur l'humain et la transformation.
            </h2>
          </div>

          <a
            href="expertise.html"
            className="
              group inline-flex w-fit shrink-0
              items-center gap-3
              border-b border-text/25 pb-1.5
              font-sans text-sm font-medium text-text
              transition-all duration-300
              hover:border-gold hover:text-gold
            "
          >
            <span>Voir le détail</span>

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1.5
              "
            >
              →
            </span>
          </a>
        </div>

        {/* ================= EXPERTISE GRID ================= */}
        <div
          className="
            grid overflow-hidden
            border border-sage/30
            bg-sage/30
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {expertise.map((item, index) => (
            <article
              key={item.number}
              className="
                group relative
                animate-fade-up
                border-b border-sage/30
                bg-background
                p-7
                transition-all duration-500 ease-out

                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_18px_45px_rgba(37,48,45,0.08)]

                sm:nth-[2n]:border-l-0
                sm:nth-[n+3]:border-t
                lg:border-l
                lg:border-t-0
                lg:border-b-0
                lg:first:border-l-0
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gold hover indicator */}
              <span
                className="
                  absolute left-0 top-0
                  h-0 w-[2px]
                  bg-gold
                  transition-all duration-500
                  group-hover:h-full
                "
              />

              {/* Number */}
              <div className="flex items-start justify-between">
                <span
                  className="
                    font-serif text-4xl leading-none
                    text-sage/60
                    transition-all duration-500
                    group-hover:text-gold
                    group-hover:translate-x-1
                  "
                >
                  {item.number}
                </span>

                {/* Arrow */}
                <span
                  className="
                    translate-x-1 -translate-y-1
                    font-sans text-lg
                    text-sage/50
                    opacity-0
                    transition-all duration-500
                    group-hover:translate-x-0
                    group-hover:opacity-100
                    group-hover:text-gold
                  "
                >
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-8
                  font-serif text-2xl font-medium
                  leading-tight text-text
                  transition-colors duration-300
                  group-hover:text-gold
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  font-sans text-sm
                  leading-7 text-muted
                "
              >
                {item.description}
              </p>

              {/* Bottom decoration */}
              <div
                className="
                  mt-8 h-px w-8
                  bg-sage/50
                  transition-all duration-500
                  group-hover:w-14
                  group-hover:bg-gold
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;