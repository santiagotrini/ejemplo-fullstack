import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

const List = props => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/messages')
      .then(res => {
        console.log(res.data);
        setMessages(res.data);
      });
  }, []);

  return (
    <ul>
      {messages.map(item => (
        <Item key={item._id} msg={item.msg} timestamp={new Date(item.timestamp).toLocaleDateString('es-AR')} />
      ))}
    </ul>
  );
};

export default List;
