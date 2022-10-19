import { useEffect, useState } from 'react';
import axios from 'axios';

const Info = props => {

  const [info, setInfo] = useState('Ultimo mensaje del servidor');

  useEffect(() => {
    axios.get('/api/messages/last')
      .then(res => {
        console.log(res.data);
        setInfo(res.data[0].msg);
      })
  }, [])

  return (
    <h3>
      {info}
    </h3>
  );
};

export default Info;
