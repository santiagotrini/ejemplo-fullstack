const Item = props => {

  const { msg, timestamp } = props;

  return (
    <li>{msg} creado en: {timestamp}</li>
  );
};

export default Item;
