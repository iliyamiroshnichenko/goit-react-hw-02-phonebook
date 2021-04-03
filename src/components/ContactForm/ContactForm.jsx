import { useState } from 'react';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState(initialState);
  const { name, number } = inputValue;

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setInputValue(initialState);
    e.currentTarget.reset();
  };

  return (
    <form className="App" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={changeInput}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={changeInput}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
