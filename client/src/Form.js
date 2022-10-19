import { useState } from 'react';
import axios from 'axios';

const Form = props => {

  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.message.value);
    const data = { msg: message };
    axios.post('/api/messages', data)
      .then(res => {
        console.log(res.data);
        setMessage('');
      });
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={message}
        name="message"
        type="text"
        placeholder="Tu mensaje"
      />
      <br />
      <input className="btn-submit" type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
