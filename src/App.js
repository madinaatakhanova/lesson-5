import './App.css';
import Saidbar from "./components/saidbar"
import Settings from "./components/Settings"


function App() {
  return (
    <fragment>
    <div className='container'>

      <Saidbar/>
      <Settings/>

    </div>

    </fragment>
  );
}

export default App;
