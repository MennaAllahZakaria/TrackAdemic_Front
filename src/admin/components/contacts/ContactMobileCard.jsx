function ContactMobileCard({
  contact,
  handleResolve,
}) {
  return (
    <div
      className="
        rounded-2xl

        border border-gray-100

        p-5
      "
    >

      <div>

        <h3
          className="
            font-bold
            text-gray-900
          "
        >
          {contact.name}
        </h3>

        <p
          className="
            text-sm
            text-gray-500

            mt-1
          "
        >
          {contact.email}
        </p>

      </div>

      <p
        className="
          text-gray-700

          leading-[1.8]

          mt-5
        "
      >
        {contact.message}
      </p>

      <div
        className="
          flex items-center
          justify-between

          mt-6
        "
      >

        <div
          className={`
            inline-flex items-center

            px-4 py-2

            rounded-xl

            text-sm
            font-semibold

            ${
              contact.status ===
              "resolved"
                ? `
                  bg-emerald-100
                  text-emerald-700
                `
                : `
                  bg-orange-100
                  text-orange-700
                `
            }
          `}
        >
          {contact.status}
        </div>

        {contact.status !==
          "resolved" && (
          <button
            onClick={() =>
              handleResolve(
                contact._id
              )
            }
            className="
              px-5 py-3

              rounded-xl

              bg-cyan-500

              text-white

              font-semibold
            "
          >
            Resolve
          </button>
        )}

      </div>

    </div>
  );
}

export default ContactMobileCard;