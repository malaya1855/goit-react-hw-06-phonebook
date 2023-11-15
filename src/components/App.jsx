import { ContactList, Filter, ContactForm } from 'components';
// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const allContacts = useSelector(state => state.contacts);

  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return filteredContacts;
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {allContacts.length === 0 ? (
        <p>No saved contacts</p>
      ) : (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default App;
