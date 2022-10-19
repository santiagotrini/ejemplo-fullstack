import Form from './Form';
import Info from './Info';
import List from './List';

const App = () => {
  return (
    <div className="App">
      <Form />
      <Info />
      <hr />
      <h2>Logs</h2>
      <List />
    </div>
  );
};

export default App;
