const TrustCredibility = () => {
  const organizations = [
    {
      name: "WESTERN UNION",
      description: "Expérience internationale",
    },
    {
      name: "OCP",
      description: "Leadership & Human Capital",
    },
    {
      name: "UM6P",
      description: "Africa Business School",
    },
  ];

  return (
    <section
      className="
        border-t border-text/10
        px-6 py-20
        text-center
        sm:px-8
        md:px-10 md:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1440px]">

        {/* ================= EYEBROW ================= */}
        <div className="animate-fade-up">
          <p
            className="
              font-sans text-xs font-medium uppercase
              tracking-[0.28em] text-gold
            "
          >
            Expérience & crédibilité
          </p>
        </div>

        {/* ================= TITLE ================= */}
        <h2
          className="
            mx-auto mt-5 max-w-3xl
            animate-fade-up
            font-serif text-3xl font-medium
            leading-[1.15] text-text
            [animation-delay:100ms]
            sm:text-4xl
            md:text-5xl
          "
        >
          Une expérience au service du développement des leaders.
        </h2>

        {/* ================= DIVIDER ================= */}
        <div
          className="
            mx-auto mt-8
            flex items-center justify-center gap-3
            animate-fade-up
            [animation-delay:180ms]
          "
        >
          <span className="h-px w-8 bg-sage/50" />

          <span className="h-1.5 w-1.5 rounded-full bg-gold" />

          <span className="h-px w-8 bg-sage/50" />
        </div>

        {/* ================= ORGANIZATIONS ================= */}
        <div
          className="
            mx-auto mt-14
            grid max-w-5xl
            animate-fade-up
            border border-sage/30
            bg-sage/30
            [animation-delay:250ms]
            sm:grid-cols-3
          "
        >
          {organizations.map((organization, index) => (
            <div
              key={organization.name}
              className={`
                group relative
                bg-background
                px-6 py-8
                transition-all duration-500
                hover:bg-white
                sm:px-8 sm:py-10
                ${index !== 0 ? "border-t border-sage/30 sm:border-l sm:border-t-0" : ""}
              `}
            >
              {/* Top gold indicator */}
              <span
                className="
                  absolute left-1/2 top-0
                  h-0 w-px
                  -translate-x-1/2
                  bg-gold
                  transition-all duration-500
                  group-hover:h-5
                "
              />

              {/* Organization */}
              <p
                className="
                  font-sans text-lg font-semibold
                  tracking-[0.08em]
                  text-text
                  transition-all duration-400
                  group-hover:-translate-y-1
                  group-hover:text-gold
                  sm:text-xl
                  md:text-2xl
                "
              >
                {organization.name}
              </p>

              {/* UM6P subtitle */}
              {organization.name === "UM6P" && (
                <p
                  className="
                    mt-1
                    font-serif text-base italic
                    text-muted
                    transition-colors duration-300
                    group-hover:text-text/70
                  "
                >
                  Africa Business School
                </p>
              )}

              {/* Description */}
              <p
                className="
                  mt-3
                  font-sans text-[10px]
                  uppercase tracking-[0.15em]
                  text-muted/70
                  transition-colors duration-300
                  group-hover:text-muted
                "
              >
                {organization.description}
              </p>

              {/* Bottom line */}
              <span
                className="
                  mx-auto mt-6
                  block h-px w-5
                  bg-sage/50
                  transition-all duration-500
                  group-hover:w-12
                  group-hover:bg-gold
                "
              />
            </div>
          ))}
        </div>

        {/* ================= FOOTNOTE ================= */}
        <p
          className="
            mx-auto mt-8 max-w-xl
            animate-fade-up
            font-sans text-xs leading-6
            text-muted
            [animation-delay:350ms]
          "
        >
          Un parcours construit au sein d'environnements internationaux
          exigeants, au service du développement humain et du leadership.
        </p>
      </div>
    </section>
  );
};

export default TrustCredibility;