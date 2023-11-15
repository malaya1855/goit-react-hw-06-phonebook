import {
  ContactList,
  Filter,
  ContactForm,
  InfoTable,
  PhoneBookForm,
  Title,
} from 'components';
import { useSelector } from 'react-redux';

const App = () => {
  const allContacts = useSelector(state => state.contacts);

  return (
    <PhoneBookForm>
      <Title>My Phonebook</Title>
      <InfoTable>
        <div>
          <h2>Add new contact</h2>
          <ContactForm />
        </div>
        <div>
          <h2>My contacts</h2>
          {allContacts.length === 0 ? (
            <p>No saved contacts</p>
          ) : (
            <div>
              <Filter />
              <ContactList />
            </div>
          )}
        </div>
      </InfoTable>
    </PhoneBookForm>
  );
};

export default App;
