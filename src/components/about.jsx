const About = () => {
  return (
    <>
      {/* ================= ABOUT ================= */}
      <section className="px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-12 lg:gap-20">
          
          {/* Image */}
          <div className="animate-fade-up lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:mx-0">

              {/* Decorative border */}
              <div
                className="
                  absolute -bottom-4 -right-4
                  h-full w-full
                  border border-sage/50
                  transition-all duration-500
                  group-hover:-bottom-5 group-hover:-right-5
                "
              />

              <div className="group relative aspect-[4/5] overflow-hidden bg-light-sage">
                <img
                  src="/i2.jpg"
                  alt="Meriem Tahiri Joutei lors d'une session de coaching"
                  className="
                    h-full w-full object-cover
                    grayscale-[15%]
                    opacity-95
                    transition-all duration-700 ease-out
                    group-hover:scale-105
                    group-hover:grayscale-0
                  "
                />

                {/* Image overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-sage/10
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up lg:col-span-7 [animation-delay:150ms]">
            <p
              className="
                font-sans text-xs font-medium uppercase
                tracking-[0.25em] text-gold
              "
            >
              À propos
            </p>

            <h2
              className="
                mt-5 max-w-3xl
                font-serif text-3xl font-medium leading-[1.12]
                text-text
                sm:text-4xl
                md:text-[2.7rem]
                lg:text-[3rem]
                xl:text-[3.25rem]
              "
            >
              Une expérience construite au croisement du business,
              du capital humain et du leadership.
            </h2>

            <p
              className="
                mt-7 max-w-2xl
                font-sans text-[15px] leading-7
                text-muted
                sm:text-base
                sm:leading-8
              "
            >
              Après plus de vingt ans dans des environnements internationaux
              exigeants — chez Western Union, puis OCP, où elle a piloté le
              marketing sur des marchés émergents avant de prendre la
              responsabilité du marketing RH — Meriem accompagne aujourd'hui
              les dirigeants, managers et talents de l'UM6P – Africa Business
              School dans leurs enjeux de leadership et de transformation.
            </p>

            <a
              href="about.html"
              className="
                group mt-8 inline-flex items-center gap-3
                border-b border-text/30 pb-1.5
                font-sans text-sm font-medium text-text
                transition-all duration-300
                hover:border-gold hover:text-gold
              "
            >
              <span>Mon parcours</span>

              <span
                aria-hidden="true"
                className="
                  inline-block
                  transition-transform duration-300
                  group-hover:translate-x-1.5
                "
              >
                →
              </span>
            </a>

            <p
              className="
                mt-10
                font-serif text-xl italic
                text-text/80
                sm:text-2xl
              "
            >
              Meriem Tahiri Joutei
            </p>
          </div>
        </div>
      </section>

      {/* ================= CAREER TIMELINE ================= */}
      <section
        className="
          border-t border-text/10
          px-6 py-20
          sm:px-8
          md:px-10 md:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1440px]">

          {/* Section title */}
          <div className="animate-fade-up text-center">
            <p
              className="
                font-sans text-xs font-medium uppercase
                tracking-[0.25em] text-gold
              "
            >
              Un parcours international
            </p>

            <p
              className="
                mx-auto mt-4 max-w-xl
                font-serif text-2xl
                text-text/80
                sm:text-3xl
              "
            >
              Des expériences qui ont façonné une vision globale
              du leadership.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto mt-16 max-w-4xl">

            {/* Desktop center line */}
            <div
              className="
                absolute bottom-3 left-2 top-3 w-px
                bg-sage/40
                md:left-1/2
                md:-translate-x-1/2
              "
            />

            <div className="space-y-14 md:space-y-20">

              {/* ================= ITEM 1 ================= */}
              <div className="group relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">

                {/* Dot */}
                <div
                  className="
                    absolute left-0 top-1.5
                    flex h-4 w-4 items-center justify-center
                    rounded-full border-2 border-gold
                    bg-background
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:bg-gold
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-gold
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

                <div className="md:pr-10 md:text-right">
                  <p className="font-serif text-2xl text-gold">
                    2007 — 2012
                  </p>

                  <p className="mt-1 font-sans font-medium text-text">
                    Western Union
                  </p>
                </div>

                <div className="mt-2 md:pl-10 md:pt-1">
                  <p className="font-sans text-sm leading-7 text-muted">
                    Marketing Europe → Afrique Subsaharienne
                  </p>
                </div>
              </div>

              {/* ================= ITEM 2 ================= */}
              <div className="group relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">

                <div
                  className="
                    absolute left-0 top-1.5
                    flex h-4 w-4 items-center justify-center
                    rounded-full border-2 border-gold
                    bg-background
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:bg-gold
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-gold
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

                <div className="md:pr-10 md:text-right">
                  <p className="font-serif text-2xl text-gold">
                    2012 — 2015
                  </p>

                  <p className="mt-1 font-sans font-medium text-text">
                    OCP
                  </p>
                </div>

                <div className="mt-2 md:pl-10 md:pt-1">
                  <p className="font-sans text-sm leading-7 text-muted">
                    Operational Marketing Manager – Emerging Markets
                  </p>
                </div>
              </div>

              {/* ================= ITEM 3 ================= */}
              <div className="group relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">

                <div
                  className="
                    absolute left-0 top-1.5
                    flex h-4 w-4 items-center justify-center
                    rounded-full border-2 border-gold
                    bg-background
                    transition-all duration-300
                    group-hover:scale-125
                    group-hover:bg-gold
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-gold
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />
                </div>

                <div className="md:pr-10 md:text-right">
                  <p className="font-serif text-2xl text-gold">
                    2015 — 2023
                  </p>

                  <p className="mt-1 font-sans font-medium text-text">
                    OCP
                  </p>
                </div>

                <div className="mt-2 md:pl-10 md:pt-1">
                  <p className="font-sans text-sm leading-7 text-muted">
                    Head HR Marketing
                  </p>
                </div>
              </div>

              {/* ================= ITEM 4 ================= */}
              <div className="group relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0">

                {/* Current dot */}
                <div
                  className="
                    absolute left-0 top-1.5
                    flex h-4 w-4 items-center justify-center
                    rounded-full border-2 border-text
                    bg-text
                    transition-all duration-300
                    group-hover:scale-125
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-background" />
                </div>

                <div className="md:pr-10 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <p className="font-serif text-2xl text-gold">
                      2022 — Aujourd'hui
                    </p>
                  </div>

                  <p className="mt-1 font-sans font-medium text-text">
                    UM6P – Africa Business School
                  </p>
                </div>

                <div className="mt-2 md:pl-10 md:pt-1">
                  <p className="font-sans text-sm leading-7 text-muted">
                    Executive Coach
                  </p>

                  <span
                    className="
                      mt-3 inline-flex items-center
                      gap-2 rounded-full
                      bg-light-sage px-3 py-1
                      font-sans text-[11px] font-medium
                      uppercase tracking-wider text-text
                    "
                  >
                    Expérience actuelle
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;