function ContactCard({ contact, handleDeleteContact }) {
  return (
    <div className="flex flex-row bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="p-6 grow">
        <h3 className="text-lg font-bold">{contact.name}</h3>
        <p className="italic text-gray-600">{contact.phone}</p>
      </div>
      <div
        onClick={() => handleDeleteContact(contact.id)}
        className="flex items-center justify-center p-4 font-bold text-white bg-red-500 rounded-r-lg cursor-pointer hover:bg-red-600"
      >
        X
      </div>
    </div>
  );
}

export default ContactCard;
