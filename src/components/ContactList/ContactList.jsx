import PropTypes from 'prop-types';

import { ContactsList, Contact, Text, Button } from './styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
};

const contactsShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(contactsShape).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
