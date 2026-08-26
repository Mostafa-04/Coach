const WhyCoaching = () => {
  const benefits = [
    "Prendre du recul",
    "Clarifier",
    "Questionner",
    "Décider",
    "Agir",
  ];

  return (
    <section className="px-6 py-20 sm:px-8 md:px-10 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-12 lg:gap-20">

        {/* ================= CONTENT ================= */}
        <div className="animate-fade-up lg:col-span-6">

          {/* Eyebrow */}
          <p
            className="
              font-sans text-xs font-medium uppercase
              tracking-[0.25em] text-gold
            "
          >
            Pourquoi le coaching ?
          </p>

          {/* Title */}
          <h2
            className="
              mt-5 max-w-2xl
              font-serif text-3xl font-medium
              leading-[1.12] text-text
              sm:text-4xl
              md:text-[2.8rem]
              lg:text-[3.1rem]
            "
          >
            Créer l'espace nécessaire pour mieux décider.
          </h2>

          {/* Description */}
          <p
            className="
              mt-7 max-w-xl
              font-sans text-[15px]
              leading-7 text-muted
              sm:text-base sm:leading-8
            "
          >
            L'executive coaching ne consiste pas à apporter des réponses
            toutes faites. Il crée un espace confidentiel pour prendre
            du recul, questionner ses certitudes et avancer avec plus
            de clarté.
          </p>

          {/* ================= BENEFITS ================= */}
          <ul className="mt-8 max-w-md">
            {benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="
                  group flex items-center
                  border-b border-text/10
                  py-3.5
                  transition-all duration-300
                  hover:pl-2
                "
              >
                {/* Number */}
                <span
                  className="
                    mr-4 w-6
                    font-sans text-[11px]
                    tracking-wider
                    text-sage
                    transition-colors duration-300
                    group-hover:text-gold
                  "
                >
                  0{index + 1}
                </span>

                {/* Dot */}
                <span
                  className="
                    mr-3
                    h-1.5 w-1.5
                    rounded-full
                    bg-sage
                    transition-all duration-300
                    group-hover:scale-150
                    group-hover:bg-gold
                  "
                />

                {/* Text */}
                <span
                  className="
                    font-sans text-sm
                    text-text
                    transition-colors duration-300
                    group-hover:text-gold
                  "
                >
                  {benefit}
                </span>

                {/* Arrow */}
                <span
                  className="
                    ml-auto
                    translate-x-2
                    font-sans text-sm
                    text-gold
                    opacity-0
                    transition-all duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                  aria-hidden="true"
                >
                  →
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="
            animate-fade-up
            [animation-delay:180ms]
            lg:col-span-6
          "
        >
          <div className="relative ml-auto max-w-xl">

            {/* Decorative frame */}
            <div
              className="
                absolute
                -bottom-4 -left-4
                h-full w-full
                border border-sage/40
                transition-all duration-500
                group-hover:-bottom-5
                group-hover:-left-5
              "
            />

            {/* Image wrapper */}
            <div
              className="
                group
                relative
                aspect-[5/4]
                overflow-hidden
                bg-light-sage
              "
            >
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
                alt="Espace de réflexion et de coaching"
                className="
                  h-full w-full
                  object-cover
                  opacity-90
                  grayscale-[20%]
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

              {/* Small label */}
              <div
                className="
                  absolute bottom-5 left-5
                  bg-background/90
                  px-4 py-2.5
                  backdrop-blur-sm
                  transition-all duration-500
                  group-hover:translate-x-1
                "
              >
                <p
                  className="
                    font-serif text-sm italic
                    text-text
                  "
                >
                  Un espace pour penser autrement.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyCoaching;