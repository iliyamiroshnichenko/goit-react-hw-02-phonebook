// import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

interface IProps {
  id: string;
  name: string;
  number: string;
  onDeleteContact: (id: string) => void;
}

const ContactListItem = ({ id, name, number, onDeleteContact }: IProps) => {
  return (
    <li className={styles.contact}>
      <p className={styles.name}>{name}</p>
      <p className={styles.tel}>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactListItem;
