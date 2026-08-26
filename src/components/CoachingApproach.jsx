const CoachingApproach = () => {
  const steps = [
    {
      number: "01",
      title: "Écouter",
      description:
        "Comprendre votre contexte, vos enjeux et vos aspirations.",
    },
    {
      number: "02",
      title: "Clarifier",
      description:
        "Identifier les véritables enjeux et les leviers d'action.",
    },
    {
      number: "03",
      title: "Transformer",
      description:
        "Faire évoluer les perspectives, postures et comportements.",
    },
    {
      number: "04",
      title: "Agir",
      description:
        "Transformer les prises de conscience en actions concrètes.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-text px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:py-32">
      
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 -top-40
          h-80 w-80
          rounded-full
          border border-gold/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-20 -top-20
          h-40 w-40
          rounded-full
          border border-gold/10
        "
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}
        <div className="mb-14 text-center animate-fade-up md:mb-20">
          <p
            className="
              font-sans text-xs font-medium uppercase
              tracking-[0.3em] text-gold
            "
          >
            Ma méthode
          </p>

          <h2
            className="
              mt-5
              font-serif text-3xl font-medium
              leading-tight text-background
              sm:text-4xl
              md:text-5xl
            "
          >
            Une approche en 4 temps
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-xl
              font-sans text-sm leading-7
              text-background/55
              sm:text-base
            "
          >
            Un cheminement structuré pour transformer les prises de
            conscience en évolutions concrètes et durables.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`
                group relative
                animate-fade-up
                px-0 py-8
                sm:px-7
                lg:px-8 lg:py-4
                ${index > 0 ? "border-t border-background/10 sm:border-t-0" : ""}
                ${index % 2 !== 0 ? "sm:border-l sm:border-background/10" : ""}
                lg:border-l lg:border-background/10
                lg:first:border-l-0
              `}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >

              {/* Number */}
              <div className="relative flex items-center gap-4">

                <span
                  className="
                    font-serif text-4xl
                    font-medium leading-none
                    text-gold/70
                    transition-all duration-500
                    group-hover:text-gold
                    group-hover:-translate-y-1
                  "
                >
                  {step.number}
                </span>

                {/* Horizontal connector */}
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      hidden h-px flex-1
                      bg-background/10
                      transition-all duration-500
                      group-hover:bg-gold/40
                      lg:block
                    "
                  />
                )}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-7
                  font-serif text-2xl font-medium
                  text-background
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:text-gold
                  sm:text-[1.7rem]
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4 max-w-xs
                  font-sans text-sm
                  leading-7
                  text-background/55
                  transition-colors duration-300
                  group-hover:text-background/75
                "
              >
                {step.description}
              </p>

              {/* Bottom indicator */}
              <div
                className="
                  mt-7
                  h-px w-8
                  bg-sage/50
                  transition-all duration-500
                  group-hover:w-16
                  group-hover:bg-gold
                "
              />
            </article>
          ))}
        </div>

        {/* ================= BOTTOM LINE ================= */}
        <div
          className="
            mt-16
            border-t border-background/10
            pt-8
            text-center
            md:mt-20
          "
        >
          <p
            className="
              font-serif text-lg italic
              text-background/50
              sm:text-xl
            "
          >
            « Chaque transformation commence par une prise de conscience. »
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoachingApproach;