import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import {
  ContactsUl,
  ContactsItem,
  ContactsText,
  ContactsSpan,
  ContactsBtn,
  ContactsDiv,
} from './ContactsList.styled';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperation';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsUl>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsDiv>
                <ContactsText>
                  <ContactsSpan> {name}</ContactsSpan>:{' '}
                  <ContactsSpan>{number}</ContactsSpan>
                </ContactsText>
                <ContactsBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  delete
                </ContactsBtn>
              </ContactsDiv>
            </ContactsItem>
          );
        })}
    </ContactsUl>
  );
};
export default ContactsList;
