const InsightsTeaser = () => {
  const insights = [
    {
      number: "01",
      category: "Leadership",
      title:
        "Le leadership commence-t-il par la capacité à prendre du recul ?",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      alt: "Leadership et prise de recul",
      href: "/",
    },
    {
      number: "02",
      category: "Human Capital",
      title:
        "Manager aujourd'hui : passer de l'expertise à l'impact.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      alt: "Manager et impact",
      href: "/",
    },
    {
      number: "03",
      category: "Career",
      title:
        "Les moments de transition comme opportunités de transformation.",
      image:
        "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1000&auto=format&fit=crop",
      alt: "Transition professionnelle",
      href: "/",
    },
  ];

  return (
    <section
      id="insights"
      className="
        border-t border-text/10
        px-6 py-20
        sm:px-8
        md:px-10 md:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1440px]">

        {/* ================= HEADER ================= */}
        <div
          className="
            mb-12 flex flex-col gap-7
            animate-fade-up
            md:mb-14
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-2xl">

            <p
              className="
                font-sans text-xs font-medium
                uppercase tracking-[0.28em]
                text-gold
              "
            >
              Insights
            </p>

            <h2
              className="
                mt-5
                max-w-2xl
                font-serif text-3xl
                font-medium
                leading-[1.15]
                text-text
                sm:text-4xl
                md:text-[2.6rem]
              "
            >
              Réflexions autour du leadership, du capital humain et des
              transformations professionnelles.
            </h2>
          </div>

          {/* View all */}
          <a
            href="insights.html"
            className="
              group inline-flex
              w-fit items-center gap-3
              whitespace-nowrap
              border-b border-text/20
              pb-1.5
              font-sans text-sm
              text-text
              transition-all duration-300
              hover:border-gold
              hover:text-gold
            "
          >
            <span>Voir tous les insights</span>

            <span
              aria-hidden="true"
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* ================= INSIGHTS GRID ================= */}
        <div
          className="
            grid gap-10
            sm:gap-12
            md:grid-cols-3
            md:gap-7
            lg:gap-10
          "
        >
          {insights.map((insight, index) => (
            <article
              key={insight.number}
              className="
                group animate-fade-up
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              <a
                href={insight.href}
                className="block"
              >

                {/* ================= IMAGE ================= */}
                <div
                  className="
                    relative
                    aspect-[4/3]
                    overflow-hidden
                    bg-light-sage
                  "
                >
                  <img
                    src={insight.image}
                    alt={insight.alt}
                    loading="lazy"
                    className="
                      h-full w-full
                      object-cover
                      opacity-90
                      grayscale
                      transition-all
                      duration-700
                      ease-out
                      group-hover:scale-105
                      group-hover:opacity-100
                      group-hover:grayscale-0
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-text/0
                      transition-colors duration-500
                      group-hover:bg-text/5
                    "
                  />

                  {/* Article number */}
                  <span
                    className="
                      absolute right-4 top-4
                      flex h-10 w-10
                      items-center justify-center
                      bg-background/90
                      font-serif text-sm
                      text-text
                      opacity-0
                      translate-y-2
                      transition-all duration-500
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    {insight.number}
                  </span>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="relative pt-6">

                  {/* Category */}
                  <div className="flex items-center gap-3">

                    <span
                      className="
                        h-px w-6
                        bg-gold
                        transition-all duration-500
                        group-hover:w-10
                      "
                    />

                    <p
                      className="
                        font-sans text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.22em]
                        text-gold
                      "
                    >
                      {insight.category}
                    </p>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      mt-4
                      font-serif
                      text-xl
                      font-medium
                      leading-[1.3]
                      text-text
                      transition-colors duration-300
                      group-hover:text-gold
                      sm:text-[1.35rem]
                    "
                  >
                    {insight.title}
                  </h3>

                  {/* Read article */}
                  <span
                    className="
                      mt-5
                      inline-flex
                      items-center gap-2
                      font-sans text-xs
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-muted
                      transition-colors duration-300
                      group-hover:text-text
                    "
                  >
                    <span>Lire l'article</span>

                    <span
                      aria-hidden="true"
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </span>

                  {/* Bottom hover line */}
                  <span
                    className="
                      absolute bottom-[-12px] left-0
                      h-px w-0
                      bg-gold
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsTeaser;