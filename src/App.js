import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarsList from './components/CarsList';
import CarDetails from './components/CarDetails';
import CarForm from './components/CarForm';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div id="main">
          <Routes>
            <Route path="/cars" element={<CarsList />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/cars/:id/edit" element={<CarForm editing={true} />} />
            <Route path="/cars/new" element={<CarForm editing={false} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
