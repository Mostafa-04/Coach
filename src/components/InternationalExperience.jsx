const InternationalExperience = () => {
  const regions = [
    {
      number: "01",
      title: "Europe",
      countries:
        "France · Espagne · Italie · Benelux · Allemagne · Pays-Bas · Suisse · Autriche",
    },
    {
      number: "02",
      title: "Afrique",
      countries:
        "Sénégal · Cameroun · RDC · Mali · Côte d'Ivoire · Bénin · Togo · Burkina Faso · Madagascar",
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden
        border-t border-text/10
        px-6 py-20
        sm:px-8
        md:px-10 md:py-28
        lg:py-32
      "
    >
      {/* ================= DECORATIVE ELEMENTS ================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 top-20
          h-64 w-64
          rounded-full
          border border-sage/20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-20 top-32
          h-40 w-40
          rounded-full
          border border-gold/15
        "
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* ================= INTRO ================= */}
        <div className="max-w-4xl animate-fade-up">

          <p
            className="
              font-sans text-xs font-medium uppercase
              tracking-[0.25em] text-gold
            "
          >
            Expérience internationale
          </p>

          <h2
            className="
              mt-5 max-w-3xl
              font-serif text-3xl font-medium
              leading-[1.12] text-text
              sm:text-4xl
              md:text-[2.8rem]
              lg:text-[3.1rem]
            "
          >
            Une expérience entre l'Europe et l'Afrique.
          </h2>

          <p
            className="
              mt-7 max-w-3xl
              font-sans text-[15px]
              leading-7 text-muted
              sm:text-base sm:leading-8
            "
          >
            Un parcours construit sur des marchés variés, en France,
            Espagne, Italie, Benelux, Allemagne, Pays-Bas, Suisse et
            Autriche, ainsi qu'en Afrique — Sénégal, Cameroun, RDC, Mali,
            Côte d'Ivoire, Bénin, Togo, Burkina Faso et Madagascar — une
            expérience qui nourrit une compréhension fine des enjeux de
            leadership dans des contextes culturels multiples.
          </p>
        </div>

        {/* ================= REGIONS ================= */}
        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">

          {regions.map((region, index) => (
            <article
              key={region.number}
              className="
                group relative
                animate-fade-up
                overflow-hidden
                border border-sage/30
                bg-background
                p-8
                transition-all duration-500
                hover:-translate-y-1
                hover:border-gold/50
                hover:bg-white
                hover:shadow-[0_20px_50px_rgba(37,48,45,0.07)]
                sm:p-10
                md:p-12
              "
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >

              {/* Large background number */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute -right-3 -top-7
                  font-serif text-[9rem]
                  font-medium leading-none
                  text-light-sage
                  transition-all duration-700
                  group-hover:-translate-x-3
                  group-hover:text-sage/20
                  sm:text-[10rem]
                "
              >
                {region.number}
              </span>

              {/* Gold vertical indicator */}
              <span
                className="
                  absolute left-0 top-0
                  h-0 w-[2px]
                  bg-gold
                  transition-all duration-500
                  group-hover:h-full
                "
              />

              <div className="relative z-10">

                {/* Region label */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-2 w-2
                      rounded-full
                      bg-gold
                      transition-transform duration-300
                      group-hover:scale-150
                    "
                  />

                  <p
                    className="
                      font-sans text-xs font-medium
                      uppercase tracking-[0.22em]
                      text-gold
                    "
                  >
                    {region.title}
                  </p>
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-7
                    font-serif text-3xl font-medium
                    text-text
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-gold
                    sm:text-4xl
                  "
                >
                  {region.title}
                </h3>

                {/* Countries */}
                <p
                  className="
                    mt-5 max-w-xl
                    font-sans text-sm
                    leading-7 text-muted
                    transition-colors duration-300
                    group-hover:text-text/80
                    sm:text-base sm:leading-8
                  "
                >
                  {region.countries}
                </p>

                {/* Bottom decoration */}
                <div className="mt-8 flex items-center gap-3">
                  <span
                    className="
                      h-px w-8
                      bg-sage/60
                      transition-all duration-500
                      group-hover:w-16
                      group-hover:bg-gold
                    "
                  />

                  <span
                    className="
                      font-serif text-sm italic
                      text-muted/70
                    "
                  >
                    International
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <div
          className="
            mt-12
            flex items-center gap-4
            animate-fade-up
            [animation-delay:350ms]
            md:mt-14
          "
        >
          <span className="h-px w-10 bg-gold/60" />

          <p
            className="
              font-sans text-xs
              uppercase tracking-[0.18em]
              text-muted
            "
          >
            Une perspective multiculturelle du leadership
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternationalExperience;