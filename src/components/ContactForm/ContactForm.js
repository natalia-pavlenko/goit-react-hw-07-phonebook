import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  FormWrapper,
  FormDiv,
  FormLabel,
  FormText,
  FormBtn,
  FormInput,
} from './ContactForm.styled';
import { addContact } from 'redux/contactsOperation';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(addContact({name, phone}));
    setName('');
    setNumber('');
  };
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormDiv>
          <FormLabel htmlFor="name">
            <FormText>Name</FormText>
            <FormInput
              id="name"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </FormLabel>
        </FormDiv>
        <FormDiv>
          <FormLabel htmlFor="phone">
            <FormText> Number</FormText>
            <FormInput
              id="phone"
              type="tel"
              name="phone"
              value={phone}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </FormLabel>
        </FormDiv>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;

