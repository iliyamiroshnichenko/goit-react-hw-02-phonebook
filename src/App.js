import { useState } from 'react';
import shortid from 'shortid';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Илья Мирошниченко', number: '+380993533451' },
  { id: 'id-2', name: 'Илон Маск', number: '+123456789147' },
  { id: 'id-3', name: 'Марк Цукерберг', number: '+198453489753' },
  { id: 'id-4', name: 'Александр Репета', number: '+380503533999' },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prState => [newContact, ...prState]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId =>
    setContacts(prState => prState.filter(({ id }) => id !== contactId));

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;
