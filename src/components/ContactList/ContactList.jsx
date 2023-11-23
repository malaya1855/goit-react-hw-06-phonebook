// import PropTypes from 'prop-types';
import { ButtonDelete, List } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice/contactsSlice';

export const ContactList = () => {
  const allContacts = useSelector(state => state.contacts);
  const filterName = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const normalizedFilter = filterName.toLowerCase();
  const filteredContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return filteredContacts.length === 0 ? (
    <p>No matched contacts in your phone book</p>
  ) : (
    <ul>
      {filteredContacts.map(contact => {
        const nameArray = contact.name.split(' ');
        const nameFirstUpperLetter = nameArray
          .map(word => word.replace(word[0], word[0].toUpperCase()))
          .join(' ');
        return (
          <List key={contact.id}>
            <p>{nameFirstUpperLetter}</p>
            <p>{contact.number}</p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>

            <ButtonDelete
              type="ButtonDelete"
              id={contact.id}
              onClick={() => {
                if (
                  window.confirm('Are you sure you want to delete the contact?')
                ) {
                  dispatch(deleteContact(contact.id));
                }
              }}
            >
              Delete
            </ButtonDelete>
          </List>
        );
      })}
    </ul>
  );
};
