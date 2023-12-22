import './App.css';
import AddNpc from './Pages/AddNpc';
import Npcs from './Pages/Npcs';
import UpdateNpc from './Pages/UpdateNpc';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/npcs" element={ <Npcs/> }/>
              <Route path="/add-npc" element={ <AddNpc/> }/>
              <Route path="/update-npc" element={ <UpdateNpc/> }/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
