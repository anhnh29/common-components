import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from './page/welcome';

function App() {
  return (
    <Router>
    <div>
        <Routes>
      <Route path='/welcome' element={<Welcome/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
