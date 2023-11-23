import { Form, Input, ButtonForm } from 'components';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contactsSlice';
import { InputMask } from 'primereact/inputmask';

export const ContactForm = () => {
  const allContacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const onSubmitForm = ev => {
    ev.preventDefault();
    const name = ev.currentTarget.elements.name.value.trim();
    const number = ev.currentTarget.elements.number.value;
    const email = ev.currentTarget.elements.email.value;

    const newContact = { id: nanoid(5), name, number, email };

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
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        <Input
          as={InputMask}
          type="tel"
          name="number"
          mask="+39 999-9999999"
          placeholder="Phone number"
          required
        />
      </label>
      <label htmlFor="email">
        <Input
          type="text"
          name="email"
          placeholder="Email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Email must contain @ symbol amd domain's name (.com, .net, etc.)"
          required
        />
      </label>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </Form>
  );
};
