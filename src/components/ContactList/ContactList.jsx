// import PropTypes from 'prop-types';
import { ButtonDelete, List } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice/contactsSlice';

export const ContactList = () => {
  const allContacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  return (
    <ul>
      {allContacts.map(contact => {
        const nameArray = contact.name.split(' ');
        const nameFirstUpperLetter = nameArray
          .map(word => word.replace(word[0], word[0].toUpperCase()))
          .join(' ');
        return (
          <List key={contact.id}>
            <p>
              {nameFirstUpperLetter}: {contact.number}
            </p>
            <ButtonDelete
              type="ButtonDelete"
              id={contact.id}
              onClick={() => {
                dispatch(deleteContact(contact.id));
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
