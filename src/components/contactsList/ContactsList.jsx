import React from 'react';
import PropTypes from 'prop-types';
import { ContactsStyled } from './ContactsList.styled';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <div className="contacts">
      <h2>Contacts List:</h2>
      <ContactsStyled>
        {contacts.map(({ name, id, number }) => (
          <li key={id} className="item">
            <span className="name">{name}</span>: <span>{number} </span>
            <button onClick={() => removeContact(id)}>Delete</button>
          </li>
        ))}
      </ContactsStyled>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
