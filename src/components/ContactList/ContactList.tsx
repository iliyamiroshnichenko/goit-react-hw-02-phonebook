// import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

interface IContact {
  id: string;
  name: string;
  number: string;
}

interface IProps {
  contacts: IContact[];
  onDeleteContact: (id: string) => void;
}

const ContactList = ({ contacts, onDeleteContact }: IProps) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
