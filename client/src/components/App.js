import {useState} from 'react';
import Login from "./Login";

const App = () => {
  const [id, setId] = useState()
  return (
    <>
      {id}
      <Login onIdSubmit={setId}></Login>
    </>
  );
}

export default App;
