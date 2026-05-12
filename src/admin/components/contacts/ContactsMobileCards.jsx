import ContactMobileCard
from "./ContactMobileCard";

function ContactsMobileCards({
  contacts,
  handleResolve,
}) {
  return (
    <div
      className="
        lg:hidden

        p-4

        space-y-4
      "
    >

      {contacts.map((contact) => (
        <ContactMobileCard
          key={contact._id}
          contact={contact}
          handleResolve={
            handleResolve
          }
        />
      ))}

    </div>
  );
}

export default ContactsMobileCards;