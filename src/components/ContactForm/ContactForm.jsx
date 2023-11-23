import { Form, Input, ButtonForm } from 'components';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contactsSlice';
import InputMask from 'react-input-mask';

export const ContactForm = () => {
  const allContacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const onSubmitForm = ev => {
    ev.preventDefault();
    const name = ev.currentTarget.elements.name.value.trim();
    const number = ev.currentTarget.elements.number.value;

    const newContact = { id: nanoid(5), name, number };
    ev.target.reset();
    const existedContact = allContacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existedContact) {
      alert(`${newContact.name} is already in your contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <label htmlFor="name">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        <InputMask mask="+399 (99) 9999999" maskPlaceholder="-">
          {() => (
            <Input
              type="tel"
              name="number"
              placeholder="Phone number"
              // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          )}
        </InputMask>
      </label>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
};
