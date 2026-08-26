import { useMemo, useState } from "react";

const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const WEEKDAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  position: "",
  message: "",
};

const Booking = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* =====================================================
     CALENDAR
  ====================================================== */

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);

    // Monday = first day
    const startDay = (firstDay.getDay() + 6) % 7;

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [currentMonth]);

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;

    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isPastDate = (date) => {
    if (!date) return true;

    const dateWithoutTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const todayWithoutTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return dateWithoutTime < todayWithoutTime;
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  /* =====================================================
     MONTH NAVIGATION
  ====================================================== */

  const previousMonth = () => {
    const previous = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    const currentRealMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previous >= currentRealMonth) {
      setCurrentMonth(previous);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  };

  const canGoPrevious =
    currentMonth.getFullYear() > today.getFullYear() ||
    (currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() > today.getMonth());

  /* =====================================================
     FORM
  ====================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!selectedDate) {
      newErrors.date = "Veuillez sélectionner une date.";
    }

    if (!selectedTime) {
      newErrors.time = "Veuillez sélectionner un créneau.";
    }

    if (!form.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis.";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Le nom est requis.";
    }

    if (!form.email.trim()) {
      newErrors.email = "L'adresse email est requise.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Veuillez saisir une adresse email valide.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    // Later:
    // router.post("/appointments", {
    //   ...form,
    //   date: selectedDate,
    //   time: selectedTime,
    // });

    setIsSubmitted(true);
  };

  const resetBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setForm(initialForm);
    setErrors({});
    setIsSubmitted(false);
  };

  /* =====================================================
     SUCCESS STATE
  ====================================================== */

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-background px-5 py-24 sm:px-8 md:px-10 md:py-32">
        <div className="mx-auto flex min-h-[65vh] max-w-2xl items-center justify-center">
          <div className="w-full animate-fade-up border border-text/10 bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(37,48,45,0.06)] sm:px-10 md:px-16 md:py-16">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-light-sage">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M5 12.5L9.5 17L19 7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              Rendez-vous confirmé
            </p>

            <h1 className="mt-5 font-serif text-4xl font-medium leading-tight text-text sm:text-5xl">
              Merci {form.firstName}.
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted">
              Votre demande de rendez-vous a bien été enregistrée.
            </p>

            <div className="mx-auto mt-10 max-w-md border-y border-text/10 py-6">
              <div className="flex items-center justify-between gap-5 border-b border-text/10 pb-5">
                <span className="text-sm text-muted">Date</span>

                <span className="text-right font-medium capitalize text-text">
                  {formatDate(selectedDate)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-5 pt-5">
                <span className="text-sm text-muted">Horaire</span>

                <span className="font-medium text-text">
                  {selectedTime}
                </span>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted">
              Un email de confirmation vous sera envoyé avec les informations
              nécessaires pour notre premier échange confidentiel de 30 minutes.
            </p>

            <button
              type="button"
              onClick={resetBooking}
              className="
                group mt-10 inline-flex items-center justify-center gap-3
                rounded-full border border-text/20
                px-7 py-3.5 text-sm font-medium text-text
                transition-all duration-300
                hover:border-gold hover:bg-light-sage
              "
            >
              <span>Prendre un autre rendez-vous</span>

              <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* =====================================================
           HEADER
        ====================================================== */}

        <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up md:mb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">
            Premier échange
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-sage/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="h-px w-8 bg-sage/50" />
          </div>

          <h1 className="mt-7 font-serif text-4xl font-medium leading-[1.1] text-text sm:text-5xl md:text-6xl">
            Prendre rendez-vous
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Réservez un premier échange confidentiel de 30 minutes pour
            explorer vos enjeux, vos aspirations et voir ensemble comment un
            accompagnement pourrait vous être utile.
          </p>
        </div>

        {/* =====================================================
           MAIN LAYOUT
        ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          {/* =================================================
             LEFT — DATE & TIME
          ================================================== */}

          <div className="space-y-6">

            {/* CALENDAR */}
            <div className="animate-fade-up border border-text/10 bg-white p-5 shadow-[0_15px_50px_rgba(37,48,45,0.035)] sm:p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">

                <button
                  type="button"
                  onClick={previousMonth}
                  disabled={!canGoPrevious}
                  aria-label="Mois précédent"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-sage/40
                    text-text transition-all duration-300
                    hover:border-gold hover:bg-light-sage
                    disabled:cursor-not-allowed disabled:opacity-30
                  "
                >
                  ←
                </button>

                <div className="text-center">
                  <p className="font-serif text-xl font-medium text-text sm:text-2xl">
                    {MONTHS[currentMonth.getMonth()]}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
                    {currentMonth.getFullYear()}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={nextMonth}
                  aria-label="Mois suivant"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full border border-sage/40
                    text-text transition-all duration-300
                    hover:border-gold hover:bg-light-sage
                  "
                >
                  →
                </button>
              </div>

              {/* Weekdays */}
              <div className="mt-8 grid grid-cols-7 gap-1 sm:gap-2">
                {WEEKDAYS.map((day) => (
                  <div
                    key={day}
                    className="py-2 text-center text-[9px] font-semibold uppercase tracking-wide text-muted sm:text-[10px]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return <div key={`empty-${index}`} />;
                  }

                  const isSelected = isSameDay(date, selectedDate);
                  const isToday = isSameDay(date, today);
                  const isDisabled = isPastDate(date);

                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                        setErrors((current) => ({
                          ...current,
                          date: "",
                          time: "",
                        }));
                      }}
                      className={`
                        relative aspect-square
                        rounded-full text-sm
                        transition-all duration-300
                        ${
                          isSelected
                            ? "bg-text font-medium text-white shadow-[0_8px_20px_rgba(37,48,45,0.15)]"
                            : isToday
                              ? "border border-gold text-text"
                              : "text-text hover:bg-light-sage hover:text-text"
                        }
                        ${
                          isDisabled
                            ? "cursor-not-allowed opacity-25"
                            : "hover:-translate-y-0.5"
                        }
                      `}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>

              {errors.date && (
                <p className="mt-5 text-center text-xs text-red-500">
                  {errors.date}
                </p>
              )}
            </div>

            {/* TIME SLOTS */}
            <div className="animate-fade-up border border-text/10 bg-white p-5 [animation-delay:100ms] shadow-[0_15px_50px_rgba(37,48,45,0.035)] sm:p-7 md:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                    Horaire
                  </p>

                  <h2 className="mt-3 font-serif text-2xl font-medium text-text">
                    Choisissez un créneau
                  </h2>
                </div>

                <span className="hidden text-xs text-muted sm:block">
                  Durée : 30 min
                </span>
              </div>

              {!selectedDate ? (
                <div className="mt-7 border border-dashed border-sage/40 bg-background px-5 py-8 text-center">
                  <p className="text-sm leading-relaxed text-muted">
                    Sélectionnez d'abord une date pour découvrir les créneaux
                    disponibles.
                  </p>
                </div>
              ) : (
                <>
                  <p className="mt-4 text-sm capitalize text-muted">
                    {formatDate(selectedDate)}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);
                          setErrors((current) => ({
                            ...current,
                            time: "",
                          }));
                        }}
                        className={`
                          min-h-11 border px-2 py-3
                          text-sm font-medium
                          transition-all duration-300
                          ${
                            selectedTime === time
                              ? "border-text bg-text text-white shadow-[0_8px_20px_rgba(37,48,45,0.12)]"
                              : "border-sage/30 text-text hover:-translate-y-0.5 hover:border-gold hover:bg-light-sage"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {errors.time && (
                <p className="mt-5 text-xs text-red-500">
                  {errors.time}
                </p>
              )}
            </div>
          </div>

          {/* =================================================
             RIGHT — SUMMARY & FORM
          ================================================== */}

          <div className="animate-fade-up [animation-delay:150ms]">

            <div className="border border-text/10 bg-white p-5 shadow-[0_15px_50px_rgba(37,48,45,0.035)] sm:p-7 md:p-8 lg:sticky lg:top-28">

              {/* SUMMARY */}
              <div className="border-b border-text/10 pb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Votre rendez-vous
                </p>

                <h2 className="mt-3 font-serif text-2xl font-medium text-text">
                  Récapitulatif
                </h2>

                <div className="mt-6 space-y-4">

                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-light-sage text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="16"
                          rx="2"
                        />
                        <path d="M7 3V7M17 3V7M3 10H21" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs text-muted">Date</p>

                      <p className="mt-1 text-sm font-medium capitalize text-text">
                        {selectedDate
                          ? formatDate(selectedDate)
                          : "À sélectionner"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-light-sage text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7V12L15 14" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs text-muted">Horaire</p>

                      <p className="mt-1 text-sm font-medium text-text">
                        {selectedTime || "À sélectionner"}
                        {selectedTime && " · 30 min"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                noValidate
                className="pt-7"
              >
                <div className="grid gap-5 sm:grid-cols-2">

                  <Field
                    label="Prénom"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                    required
                  />

                  <Field
                    label="Nom"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                    required
                  />
                </div>

                <div className="mt-5">
                  <Field
                    label="Adresse email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Entreprise"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Optionnel"
                  />

                  <Field
                    label="Fonction"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="Optionnel"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-text"
                  >
                    Votre message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="En quelques mots, quels sont les sujets que vous souhaitez explorer ?"
                    className="
                      w-full resize-none
                      border border-sage/30
                      bg-background/40
                      px-4 py-3.5
                      text-sm text-text
                      outline-none
                      transition-all duration-300
                      placeholder:text-muted/70
                      focus:border-gold
                      focus:bg-white
                      focus:ring-2 focus:ring-gold/10
                    "
                  />
                </div>

                <p className="mt-6 text-xs leading-relaxed text-muted">
                  Les informations partagées dans le cadre de cette demande
                  sont traitées de manière confidentielle.
                </p>

                <button
                  type="submit"
                  className="
                    group mt-7 flex w-full items-center justify-center gap-3
                    rounded-full bg-text
                    px-6 py-4
                    text-sm font-medium text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-sage
                    hover:text-text
                    hover:shadow-[0_15px_30px_rgba(37,48,45,0.15)]
                    active:translate-y-0
                  "
                >
                  <span>Confirmer mon rendez-vous</span>

                  <span className="text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:text-text">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================================================
   REUSABLE FIELD COMPONENT
========================================================= */

const Field = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder = "",
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-1 text-xs font-medium text-text"
      >
        {label}

        {required && (
          <span className="text-gold">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          border
          bg-background/40
          px-4 py-3.5
          text-sm text-text
          outline-none
          transition-all duration-300
          placeholder:text-muted/70
          focus:bg-white
          focus:ring-2
          ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : "border-sage/30 focus:border-gold focus:ring-gold/10"
          }
        `}
      />

      {error && (
        <p className="mt-2 text-[11px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Booking;