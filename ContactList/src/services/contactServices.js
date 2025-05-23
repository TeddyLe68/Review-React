export const getContacts = async () => {
  try {
    const respone = await fetch(
      "https://682e983d746f8ca4a47d9966.mockapi.io/contacts"
    );

    if (respone.ok) {
      return await respone.json();
    }
    return [];
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

export const deleteContact = async (id) => {
  try {
    const respone = await fetch(
      `https://682e983d746f8ca4a47d9966.mockapi.io/contacts/${id}`,
      { method: "DELETE" }
    );
    if (respone.ok) {
      return {
        status: respone.status,
        message: "Contact deleted successfully",
      };
    }
    return {
      status: respone.status,
      message: "Failed to delete contact",
    };
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
};

export const addContact = async (contact) => {
  try {
    const respone = await fetch(
      "https://682e983d746f8ca4a47d9966.mockapi.io/contacts",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (respone.ok) {
      return {
        status: respone.status,
        message: "Contact added successfully",
      };
    }
    return {
      status: respone.status,
      message: "Failed to add contact",
    };
  } catch (error) {
    console.error("Error adding contact:", error);
  }
};
