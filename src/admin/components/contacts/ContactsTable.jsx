import ContactsMobileCards
from "./ContactsMobileCards";

import ContactTableRow
from "./ContactTableRow";

function ContactsTable({
  contacts,
  handleResolve,
}) {
  return (
    <div
      className="
        bg-white

        rounded-[24px]
        sm:rounded-[32px]

        border border-gray-100

        shadow-sm

        overflow-hidden
      "
    >

      <div
        className="
          px-4 py-3
          sm:px-5 sm:py-4
          lg:px-6 lg:py-5

          border-b border-gray-100
        "
      >

        <h2
          className="
            text-lg
            sm:text-xl
            lg:text-2xl

            font-bold

            text-gray-900
          "
        >
          Contact Messages
        </h2>

      </div>

      <ContactsMobileCards
        contacts={contacts}
        handleResolve={
          handleResolve
        }
      />

      <div
        className="
          hidden lg:block

          overflow-x-auto
        "
      >

        <table className="w-full">

          <thead
            className="
              bg-gray-50
            "
          >

            <tr>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                User
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                Message
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                Status
              </th>

              <th className="text-left px-6 py-5 text-sm font-semibold text-gray-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {contacts.map((contact) => (
              <ContactTableRow
                key={contact._id}
                contact={contact}
                handleResolve={
                  handleResolve
                }
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ContactsTable;
