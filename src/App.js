import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import 'bootstrap/dist/css/bootstrap.css';
import bottomnavbar from './components/bottomnavbar';


function App() {
  return (
    <div className="App">
     <button className="btn btn-sm btn-primary">
       Hello
     </button>
      <Greet/>

    </div>
  );
}

export default App;
