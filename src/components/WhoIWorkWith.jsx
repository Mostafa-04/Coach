const WhoIWorkWith = () => {
  const profiles = [
    {
      number: "01",
      title: "Dirigeants",
      description:
        "Prendre du recul face aux décisions complexes et aux responsabilités croissantes.",
    },
    {
      number: "02",
      title: "Managers",
      description:
        "Développer leur posture et accompagner leur évolution vers de nouvelles responsabilités.",
    },
    {
      number: "03",
      title: "Cadres & Talents",
      description:
        "Clarifier leurs aspirations et construire la prochaine étape de leur parcours.",
    },
    {
      number: "04",
      title: "Organisations",
      description:
        "Accompagner les leaders et talents dans leurs transformations professionnelles.",
    },
  ];

  return (
    <section className="border-t border-text/10 px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}
        <div className="mb-12 animate-fade-up md:mb-14">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className="
                  font-sans text-xs font-medium uppercase
                  tracking-[0.25em] text-gold
                "
              >
                Pour qui ?
              </p>

              <h2
                className="
                  mt-4 max-w-2xl
                  font-serif text-3xl font-medium
                  leading-tight text-text
                  sm:text-4xl md:text-[2.8rem]
                "
              >
                Un accompagnement adapté à chaque étape du parcours.
              </h2>
            </div>

            <p
              className="
                max-w-sm
                font-sans text-sm leading-7
                text-muted
                md:text-right
              "
            >
              Dirigeants, managers, talents et organisations :
              chaque accompagnement commence par une écoute attentive
              des enjeux et des besoins.
            </p>
          </div>
        </div>

        {/* ================= PROFILES GRID ================= */}
        <div className="grid overflow-hidden border border-sage/30 bg-sage/30 md:grid-cols-2">
          {profiles.map((profile, index) => (
            <article
              key={profile.number}
              className={`
                group relative
                animate-fade-up
                overflow-hidden
                bg-background
                p-8 sm:p-10 md:p-12
                transition-all duration-500 ease-out
                hover:bg-white
                ${index % 2 !== 0 ? "md:border-l md:border-sage/30" : ""}
                ${index >= 2 ? "border-t border-sage/30" : ""}
              `}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* Large background number */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute -right-3 -top-7
                  select-none
                  font-serif text-[9rem]
                  font-medium leading-none
                  text-light-sage
                  transition-all duration-700
                  group-hover:-translate-x-2
                  group-hover:text-sage/20
                  sm:text-[10rem]
                "
              >
                {profile.number}
              </span>

              {/* Gold vertical line */}
              <span
                className="
                  absolute left-0 top-0
                  h-0 w-[2px]
                  bg-gold
                  transition-all duration-500
                  group-hover:h-full
                "
              />

              {/* Content */}
              <div className="relative z-10">

                {/* Small number */}
                <span
                  className="
                    font-sans text-xs font-medium
                    tracking-[0.2em]
                    text-gold
                    transition-colors duration-300
                  "
                >
                  {profile.number}
                </span>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    font-serif text-3xl font-medium
                    text-text
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-gold
                    sm:text-4xl
                  "
                >
                  {profile.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5 max-w-lg
                    font-sans text-sm leading-7
                    text-muted
                    sm:text-base sm:leading-8
                  "
                >
                  {profile.description}
                </p>

                {/* Link */}
                <a
                  href="expertise.html"
                  className="
                    group/link mt-7 inline-flex
                    items-center gap-3
                    border-b border-text/20
                    pb-1.5
                    font-sans text-sm font-medium
                    text-text
                    transition-all duration-300
                    hover:border-gold hover:text-gold
                  "
                >
                  <span>En savoir plus</span>

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform duration-300
                      group-hover/link:translate-x-1.5
                    "
                  >
                    →
                  </span>
                </a>
              </div>

              {/* Bottom hover decoration */}
              <div
                className="
                  absolute bottom-0 left-0
                  h-px w-0
                  bg-gold
                  transition-all duration-700
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIWorkWith;