function ContactsHero() {
  return (
    <div
      className="
        relative overflow-hidden

        rounded-[36px]

        bg-gradient-to-br
        from-[#0F172A]
        via-[#111827]
        to-[#1E293B]

        p-6
        sm:p-8
        lg:p-10

        text-white
      "
    >

      <div
        className="
          absolute top-0 right-0

          w-[280px] h-[280px]

          bg-cyan-400/20

          blur-3xl

          rounded-full
        "
      ></div>

      <div className="relative z-10">

        <div
          className="
            inline-flex items-center
            gap-2

            px-4 py-2

            rounded-full

            bg-cyan-400/10

            border border-cyan-400/20

            text-cyan-300

            text-sm
          "
        >

          <i className="ri-customer-service-2-line"></i>

          Support & Contact Center

        </div>

        <h1
          className="
            text-3xl
            sm:text-5xl

            font-bold

            leading-tight

            mt-6
          "
        >
          Manage contact requests
          and support conversations.
        </h1>

        <p
          className="
            text-white/70

            text-base
            sm:text-lg

            leading-[2]

            mt-6

            max-w-[700px]
          "
        >
          Track incoming support
          requests, review messages,
          and manage communication
          with platform users.
        </p>

      </div>

    </div>
  );
}

export default ContactsHero;