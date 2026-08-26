import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que l'Executive Coaching ?",
      answer:
        "Un accompagnement individuel, confidentiel, centré sur les enjeux professionnels d'un dirigeant, manager ou cadre, pour l'aider à prendre du recul et agir avec plus de clarté.",
    },
    {
      question: "À qui s'adresse l'accompagnement ?",
      answer:
        "Aux dirigeants, managers, cadres et talents en transition, ainsi qu'aux organisations souhaitant accompagner leurs leaders dans des moments de transformation.",
    },
    {
      question: "Comment se déroule une séance ?",
      answer:
        "Chaque séance part de vos enjeux du moment. Elle alterne écoute, questionnement et mise en perspective, pour aboutir à des pistes d'action concrètes.",
    },
    {
      question: "Combien de temps dure un accompagnement ?",
      answer:
        "La durée varie selon les objectifs, généralement entre 6 et 12 séances réparties sur plusieurs mois. Elle est définie ensemble dès le premier échange.",
    },
    {
      question: "Les séances sont-elles confidentielles ?",
      answer:
        "Oui, la confidentialité est un principe fondamental de l'executive coaching. Le contenu des séances reste strictement entre vous et Meriem.",
    },
    {
      question: "Les séances peuvent-elles être réalisées à distance ?",
      answer:
        "Oui, les séances se déroulent en présentiel à Casablanca ou à distance en visioconférence, selon vos préférences et votre localisation.",
    },
    {
      question: "Comment démarrer un accompagnement ?",
      answer:
        "Un premier échange exploratoire de 30 minutes permet de comprendre vos enjeux et de voir ensemble si l'accompagnement peut y répondre.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        border-t border-text/10
        px-6 py-20
        sm:px-8
        md:px-10 md:py-28
        lg:py-32
      "
    >
      <div className="mx-auto max-w-[1440px]">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================= LEFT ================= */}
          <div
            className="
              lg:col-span-4
              animate-fade-up
            "
          >
            <div className="lg:sticky lg:top-32">

              <p
                className="
                  font-sans text-xs font-medium
                  uppercase tracking-[0.28em]
                  text-gold
                "
              >
                Questions fréquentes
              </p>

              <h2
                className="
                  mt-5
                  max-w-sm
                  font-serif text-3xl
                  font-medium
                  leading-[1.15]
                  text-text
                  sm:text-4xl
                "
              >
                Quelques réponses avant de commencer.
              </h2>

              <p
                className="
                  mt-6 max-w-sm
                  font-sans text-sm
                  leading-7
                  text-muted
                "
              >
                Retrouvez ici les réponses aux questions les plus fréquentes
                concernant l'accompagnement et le déroulement des séances.
              </p>

              {/* Decorative line */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </div>

            </div>
          </div>

          {/* ================= FAQ LIST ================= */}
          <div
            className="
              lg:col-span-8
              animate-fade-up
              [animation-delay:150ms]
            "
          >
            <div className="border-y border-sage/30">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="
                      border-b border-sage/30
                      last:border-b-0
                    "
                  >

                    {/* ================= QUESTION ================= */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="
                        group
                        flex w-full
                        items-center
                        justify-between
                        gap-6
                        py-5
                        text-left
                        sm:py-6
                      "
                    >

                      <div className="flex items-center gap-5">

                        {/* Number */}
                        <span
                          className={`
                            hidden
                            font-sans text-[10px]
                            tracking-[0.15em]
                            transition-colors duration-300
                            sm:block
                            ${
                              isOpen
                                ? "text-gold"
                                : "text-muted/50 group-hover:text-gold"
                            }
                          `}
                        >
                          0{index + 1}
                        </span>

                        {/* Question */}
                        <span
                          className={`
                            font-serif
                            text-lg
                            font-medium
                            leading-snug
                            transition-colors duration-300
                            md:text-xl
                            ${
                              isOpen
                                ? "text-gold"
                                : "text-text group-hover:text-gold"
                            }
                          `}
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* ================= ICON ================= */}
                      <span
                        className={`
                          relative
                          flex h-9 w-9
                          shrink-0
                          items-center justify-center
                          border
                          transition-all duration-300
                          ${
                            isOpen
                              ? "rotate-45 border-gold bg-light-sage"
                              : "border-sage/40 bg-background group-hover:border-gold group-hover:bg-light-sage"
                          }
                        `}
                      >
                        <span
                          className="
                            absolute
                            h-px w-3
                            bg-gold
                          "
                        />

                        <span
                          className="
                            absolute
                            h-3 w-px
                            bg-gold
                          "
                        />
                      </span>

                    </button>

                    {/* ================= ANSWER ================= */}
                    <div
                      id={`faq-answer-${index}`}
                      className={`
                        grid
                        transition-[grid-template-rows,opacity]
                        duration-500
                        ease-out
                        ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }
                      `}
                    >
                      <div className="overflow-hidden">

                        <div className="pb-7 pl-0 sm:pl-10 md:pl-12">

                          <div className="flex gap-4">

                            {/* Gold line */}
                            <span
                              className="
                                mt-1
                                h-auto
                                min-h-6
                                w-px
                                shrink-0
                                bg-gold/60
                              "
                            />

                            <p
                              className="
                                max-w-2xl
                                font-sans text-sm
                                leading-7
                                text-muted
                                md:text-[15px]
                                md:leading-7
                              "
                            >
                              {faq.answer}
                            </p>

                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* ================= BOTTOM NOTE ================= */}
            <div className="mt-8 flex items-center gap-3">

              <span className="h-px w-8 bg-sage/50" />

              <p
                className="
                  font-sans text-[10px]
                  uppercase tracking-[0.18em]
                  text-muted
                "
              >
                Une première conversation peut tout changer.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;