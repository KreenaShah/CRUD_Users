import './App.css';

//components
import NavBar from './components/NavBar';
import CrudUsers from "./components/CrudUsers";
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

//Routing
import {BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CrudUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
