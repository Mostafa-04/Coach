import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Une expérience qui m'a permis de prendre du recul, de clarifier mes priorités et d'aborder mes responsabilités avec davantage de confiance.",
    author: "Client Executive",
    role: "DEMO",
  },
  {
    quote:
      "Un accompagnement exigeant et bienveillant, qui m'a aidé à transformer ma posture de manager en véritable posture de leader.",
    author: "Directeur",
    role: "DEMO",
  },
  {
    quote:
      "Des séances structurées, un espace de confiance, et des progrès concrets sur des sujets que je pensais insurmontables.",
    author: "Cadre dirigeant",
    role: "DEMO",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="border-t border-text/10 bg-background px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-12 text-center md:mb-16">
          <div className="animate-fade-up">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">
              Ils témoignent
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-sage/50 sm:w-10" />

              <span className="h-1.5 w-1.5 rounded-full bg-gold" />

              <span className="h-px w-7 bg-sage/50 sm:w-10" />
            </div>
          </div>
        </div>

        {/* =====================================================
            TESTIMONIAL CAROUSEL
        ====================================================== */}
        <div
          className="mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">

            {/* Decorative quotation mark */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-1
                -top-8
                font-serif
                text-[7rem]
                leading-none
                text-light-sage
                sm:-left-4
                sm:-top-10
                sm:text-[9rem]
                md:-left-10
              "
            >
              “
            </div>

            {/* =================================================
                SLIDES
            ================================================== */}
            <div className="relative overflow-hidden">

              <div
                className="relative transition-[height] duration-500"
                style={{
                  minHeight:
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? "340px"
                      : "280px",
                }}
              >
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <article
                      key={testimonial.quote}
                      aria-hidden={!isActive}
                      className={`
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        px-6
                        text-center
                        transition-all
                        duration-700
                        ease-out
                        sm:px-10
                        md:px-14
                        ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : index < activeIndex
                              ? "-translate-x-10 opacity-0"
                              : "translate-x-10 opacity-0"
                        }
                      `}
                    >
                      {/* Quote */}
                      <blockquote
                        className="
                          max-w-3xl
                          font-serif
                          text-[1.45rem]
                          font-medium
                          leading-[1.55]
                          tracking-[-0.01em]
                          text-text
                          sm:text-2xl
                          sm:leading-[1.55]
                          md:text-[2rem]
                          lg:text-[2.2rem]
                          lg:leading-[1.5]
                        "
                      >
                        “{testimonial.quote}”
                      </blockquote>

                      {/* Author */}
                      <div className="mt-7 sm:mt-8">
                        <p className="font-sans text-sm font-medium tracking-wide text-text">
                          — {testimonial.author}
                        </p>

                        <p className="mt-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                CONTROLS
            ================================================== */}
            <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8 sm:gap-5">

              {/* Previous */}
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Témoignage précédent"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-sage/40
                  text-text
                  transition-all
                  duration-300
                  hover:-translate-x-0.5
                  hover:border-gold
                  hover:bg-light-sage
                  hover:text-gold
                  active:scale-90
                  sm:h-11
                  sm:w-11
                "
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5">
                  ←
                </span>
              </button>

              {/* Dots */}
              <div
                className="flex items-center gap-1"
                role="tablist"
                aria-label="Témoignages"
              >
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.quote}
                    type="button"
                    onClick={() => goToTestimonial(index)}
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Afficher le témoignage ${index + 1}`}
                    className="
                      flex
                      h-8
                      items-center
                      justify-center
                      px-1
                    "
                  >
                    <span
                      className={`
                        block
                        h-1
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          index === activeIndex
                            ? "w-7 bg-gold"
                            : "w-1.5 bg-sage/50 hover:w-3 hover:bg-sage"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Témoignage suivant"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-sage/40
                  text-text
                  transition-all
                  duration-300
                  hover:translate-x-0.5
                  hover:border-gold
                  hover:bg-light-sage
                  hover:text-gold
                  active:scale-90
                  sm:h-11
                  sm:w-11
                "
              >
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>

            {/* =================================================
                AUTOPLAY PROGRESS
            ================================================== */}
            <div className="mx-auto mt-7 h-px w-20 overflow-hidden bg-sage/20 sm:mt-8 sm:w-24">
              <div
                key={activeIndex}
                className="
                  h-full
                  w-full
                  origin-left
                  animate-[progress_6s_linear]
                  bg-gold/70
                "
              />
            </div>

            {/* Small counter */}
            <div className="mt-4 text-center">
              <span className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-muted">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;