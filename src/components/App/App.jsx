import {
  ContactList,
  Filter,
  ContactForm,
  InfoTable,
  PhoneBookForm,
  Title,
  ItemForm,
} from 'components';
import { useSelector } from 'react-redux';

const App = () => {
  const allContacts = useSelector(state => state.contacts);

  return (
    <PhoneBookForm>
      <Title>My Phonebook</Title>
      <InfoTable>
        <ItemForm>
          <h2>Add new contact</h2>
          <ContactForm />
        </ItemForm>
        <ItemForm>
          <h2>My contacts</h2>
          {allContacts.length === 0 ? (
            <p>No saved contacts</p>
          ) : (
            <div>
              <Filter />
              <ContactList />
            </div>
          )}
        </ItemForm>
      </InfoTable>
    </PhoneBookForm>
  );
};

export default App;
