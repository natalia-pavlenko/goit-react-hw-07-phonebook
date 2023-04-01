import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  ContactsUl,
  ContactsItem,
  ContactsText,
  ContactsSpan,
  ContactsBtn,
  ContactsDiv,
} from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contactsOperation';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsUl>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, phone }) => {
          return (
            <ContactsItem key={id}>
              <ContactsDiv>
                <ContactsText>
                  <ContactsSpan> {name}</ContactsSpan>:{' '}
                  <ContactsSpan>{phone}</ContactsSpan>
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
