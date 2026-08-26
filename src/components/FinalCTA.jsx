import { Link } from "react-router-dom";
const FinalCTA = () => {
  return (
    <section
    id="contact"
      className="
        relative
        overflow-hidden
        bg-text
        px-6 py-20
        text-center
        sm:px-8
        md:px-10 md:py-28
        lg:py-36
      "
    >
      {/* ================= DECORATIVE CIRCLES ================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-32 -top-32
          h-72 w-72
          rounded-full
          border border-sage/10
          transition-transform duration-[2000ms]
          hover:scale-110
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 -bottom-40
          h-96 w-96
          rounded-full
          border border-gold/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-px w-24
          -translate-x-1/2
          bg-gold/50
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          mx-auto max-w-3xl
          animate-fade-up
        "
      >
        {/* Eyebrow */}
        <p
          className="
            font-sans text-[10px]
            font-medium uppercase
            tracking-[0.3em]
            text-gold
            sm:text-xs
          "
        >
          Un premier échange
        </p>

        {/* Heading */}
        <h2
          className="
            mt-5
            font-serif
            text-3xl
            font-medium
            leading-[1.12]
            text-background
            sm:text-4xl
            md:text-5xl
            lg:text-[3.5rem]
          "
        >
          Et si le prochain chapitre commençait par une conversation ?
        </h2>

        {/* Decorative separator */}
        <div
          className="
            mx-auto mt-8
            flex items-center
            justify-center gap-3
          "
        >
          <span className="h-px w-8 bg-sage/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="h-px w-8 bg-sage/40" />
        </div>

        {/* Description */}
        <p
          className="
            mx-auto mt-7
            max-w-xl
            font-sans
            text-sm
            leading-7
            text-background/65
            sm:text-base
            sm:leading-8
          "
        >
          Un premier échange confidentiel pour prendre du recul et explorer
          vos enjeux.
        </p>

        {/* ================= CTA ================= */}
        <div className="mt-10 flex justify-center">

          <Link
            to="/booking"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-4
              overflow-hidden
              border border-background/70
              bg-background
              px-7 py-4
              font-sans
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-text
              transition-all
              duration-500
              hover:border-gold
              hover:bg-gold
              hover:text-white
              hover:shadow-[0_15px_40px_rgba(184,155,106,0.18)]
              active:scale-[0.98]
              sm:px-9
              sm:py-4.5
            "
          >
            <span>
              Prendre rendez-vous
            </span>

            <span
              aria-hidden="true"
              className="
                text-base
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

            {/* Hover line */}
            <span
              className="
                absolute
                bottom-0 left-0
                h-0.5 w-0
                bg-white/70
                transition-all duration-500
                group-hover:w-full
              "
            />
          </Link>

        </div>

        {/* Small reassurance */}
        <p
          className="
            mt-6
            font-sans
            text-[10px]
            uppercase
            tracking-[0.15em]
            text-background/35
          "
        >
          Échange confidentiel · 30 minutes
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;