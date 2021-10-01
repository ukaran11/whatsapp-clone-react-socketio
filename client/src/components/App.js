
import { useLocalStorage } from '../hooks/useLocalStorage';
import Login from "./Login";

const App = () => {
  const [id, setId] = useLocalStorage('id');
  return (
    <>
      {id}
      <Login onIdSubmit={setId}></Login>
    </>
  );
}

export default App;
