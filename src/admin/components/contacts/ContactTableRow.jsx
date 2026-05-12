function ContactTableRow({
  contact,
  handleResolve,
}) {
  return (
    <tr
      className="
        border-t border-gray-100
      "
    >

      <td className="px-6 py-5">

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

      </td>

      <td className="px-6 py-5">

        <p
          className="
            text-gray-700

            line-clamp-2

            max-w-[400px]
          "
        >
          {contact.message}
        </p>

      </td>

      <td className="px-6 py-5">

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

      </td>

      <td className="px-6 py-5">

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

              hover:bg-cyan-600

              transition-all duration-300
            "
          >
            Resolve
          </button>
        )}

      </td>

    </tr>
  );
}

export default ContactTableRow;