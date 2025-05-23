import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import InputForm from "./components/InputForm";
import {
  addContact,
  deleteContact,
  getContacts,
} from "./services/contactServices";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData(await getContacts());
    };
    fetchData();
  }, [loading]);

  const handleDeleteContact = async (id) => {
    const { message } = await deleteContact(id);
    if (message) {
      setLoading(!loading);
    }
  };

  const handleAddContact = async (contact) => {
    const { message } = await addContact(contact);
    if (message) {
      setLoading(!loading);
    }
  };
  return (
    <div className="min-h-screen py-12">
      <InputForm handleAddContact={handleAddContact} />
      <ContactList contacts={data} handleDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
