import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='SideBar'>
        <NavBar />
      </div>

      <div className='MainContent'>
      <Main />
      </div>     
    </div>
  );
}

export default App;
