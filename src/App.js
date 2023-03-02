import './App.css';
import Prueba from './components/Prueba';

function App() {
 
  return (
    <>
      
      <section>
        <p>Email</p>
        <input type= 'text' id= 'text-id' ></input>
        <p>Password</p>
        <input type= 'text' id= 'text-password' ></input>
        <button className='login'>Login</button>
      </section>
    </>
  );
}

export default App;
