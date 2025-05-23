import ContactCard from "./ContactCard";

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <div className="my-12 w-11/12 mx-auto grid grid-cols-4 gap-4">
      {contacts &&
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
              handleDeleteContact={handleDeleteContact}
            />
          );
        })}
    </div>
  );
}

export default ContactList;
