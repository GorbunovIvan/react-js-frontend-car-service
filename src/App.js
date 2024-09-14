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
        <Routes>
          <Route path="/cars" element={<CarsList />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/cars/:id/edit" element={<CarForm editing={true} />} />
          <Route path="/cars/new" element={<CarForm editing={false} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
