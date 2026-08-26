import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-background
        px-6
        pt-28
        pb-20
        sm:pt-32
        sm:pb-24
        md:px-10
        md:pt-32
        md:pb-28
        lg:pt-36
        lg:pb-32
      "
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-light-sage/60
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-40
          h-[360px]
          w-[360px]
          rounded-full
          bg-sage/10
          blur-3xl
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1440px]
          items-start
          gap-14
          lg:grid-cols-12
          lg:gap-10
          xl:gap-16
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="lg:col-span-6 pt-1 lg:pt-3">

          {/* Eyebrow */}
          <div className="animate-fade-up">
            <p
              className="
                mb-6
                flex
                flex-wrap
                items-center
                gap-2.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-muted
                sm:text-[11px]
              "
            >
              <span className="mr-1 h-px w-8 bg-gold" />

              <span>Executive Coach</span>

              <span className="hidden sm:inline text-sage">·</span>

              <span className="hidden sm:inline">
                Leadership
              </span>

              <span className="hidden sm:inline text-sage">·</span>

              <span className="hidden sm:inline">
                Human Capital
              </span>
            </p>
          </div>

          {/* Title */}
          <h1
            className="
              max-w-[700px]
              animate-[fadeUp_.8s_.1s_ease-out_both]
              font-serif
              text-[2.65rem]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              text-text
              sm:text-6xl
              sm:leading-[1.04]
              md:text-[4rem]
              lg:text-[3.8rem]
              xl:text-[4.25rem]
              xl:leading-[1.03]
            "
          >
            Accompagner les leaders{" "}
            <span className="group relative inline-block">
              dans les moments qui comptent.

              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-1/4
                  bg-gold
                  transition-all
                  duration-700
                  ease-out
                  group-hover:w-full
                "
              />
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[32rem]
              animate-[fadeUp_.8s_.2s_ease-out_both]
              text-base
              leading-[1.8]
              text-muted
              sm:text-[1.05rem]
            "
          >
            Un accompagnement confidentiel et personnalisé pour
            prendre du recul, clarifier vos enjeux et développer
            un leadership plus impactant.
          </p>



          {/* =====================================================
              ACTIONS
          ===================================================== */}
          <div
            className="
              mt-9
              flex
              animate-[fadeUp_.8s_.35s_ease-out_both]
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
            "
          >
            {/* Primary CTA */}
            <Link
              to="/booking"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-text
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-sage
                hover:text-text
                hover:shadow-[0_14px_30px_rgba(37,48,45,0.15)]
                active:translate-y-0
              "
            >
              <span>Prendre rendez-vous</span>

              <span
                aria-hidden="true"
                className="
                  text-gold
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-text
                "
              >
                →
              </span>
            </Link>

            {/* Secondary CTA */}
            <a
              href="#approach"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-2
                py-3
                text-sm
                font-medium
                text-text
              "
            >
              <span className="relative">
                Découvrir mon approche

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-full
                    origin-left
                    scale-x-0
                    bg-gold
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </span>

              <span
                aria-hidden="true"
                className="
                  text-gold
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>

          {/* Location */}
          <div
            className="
              mt-8
              flex
              animate-[fadeUp_.8s_.45s_ease-out_both]
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-muted
                "
              >
                Casablanca
              </span>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-px w-6 bg-sage sm:block"
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-muted
              "
            >
              Accompagnement international
            </span>
          </div>
                    {/* =====================================================
              EXPERIENCE + REFERENCES
          ===================================================== */}
          <div
            className="
              mt-8
              flex
              animate-[fadeUp_.8s_.25s_ease-out_both]
              flex-col
              gap-5
              border-y
              border-text/10
              py-5
              sm:flex-row
              sm:items-center
              sm:gap-7
            "
          >
            {/* Experience */}
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-gold" />

              <span
                className="
                  whitespace-nowrap
                  font-serif
                  text-lg
                  tracking-wide
                  text-text
                  sm:text-xl
                "
              >
                20+ ans d'expérience
              </span>
            </div>

            {/* Separator */}
            <span
              aria-hidden="true"
              className="
                hidden
                h-8
                w-px
                bg-sage/50
                sm:block
              "
            />

            {/* Companies */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-muted
                sm:text-[10px]
              "
            >
              <span className="transition-colors duration-300 hover:text-text">
                Western Union
              </span>

              <span
                aria-hidden="true"
                className="h-3 w-px bg-sage/50"
              />

              <span className="transition-colors duration-300 hover:text-text">
                OCP
              </span>

              <span
                aria-hidden="true"
                className="h-3 w-px bg-sage/50"
              />

              <span className="transition-colors duration-300 hover:text-text">
                UM6P
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT — IMAGE
        ===================================================== */}
        <div
          className="
            animate-[fadeIn_1s_.25s_ease-out_both]
            lg:col-span-6
          "
        >
          <div
            className="
              group
              relative
              mx-auto
              w-full
              max-w-[560px]
              lg:ml-auto
              lg:max-w-none
              lg:pl-8
            "
          >
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="
                absolute
                -left-3
                -top-3
                h-full
                w-full
                border
                border-gold/40
                transition-all
                duration-500
                group-hover:-left-5
                group-hover:-top-5
              "
            />

            {/* Image */}
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                bg-light-sage
              "
            >
              <img
                src="/i1.jpg"
                alt="Portrait éditorial de Meriem Tahiri Joutei, Executive Coach"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  opacity-90
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-105
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />

              {/* Overlay */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-text/25
                  via-transparent
                  to-transparent
                "
              />

              {/* Top right detail */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-5
                  top-5
                  h-10
                  w-10
                  border-r
                  border-t
                  border-white/70
                  transition-all
                  duration-500
                  group-hover:right-7
                  group-hover:top-7
                "
              />

              {/* Bottom left detail */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-5
                  left-5
                  h-10
                  w-10
                  border-b
                  border-l
                  border-white/40
                "
              />
            </div>

            {/* Floating card */}
            <div
              className="
                absolute
                -bottom-6
                left-4
                right-4
                border
                border-text/10
                bg-background/95
                px-5
                py-3.5
                shadow-[0_10px_30px_rgba(37,48,45,0.07)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(37,48,45,0.11)]
                sm:left-8
                sm:right-auto
              "
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-muted
                    sm:text-[10px]
                  "
                >
                  Executive Coaching
                </span>

                <span
                  aria-hidden="true"
                  className="hidden h-px w-5 bg-sage sm:block"
                />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-muted
                    sm:text-[10px]
                  "
                >
                  Leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;