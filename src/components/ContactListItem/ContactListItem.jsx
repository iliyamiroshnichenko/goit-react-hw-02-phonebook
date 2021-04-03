const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
