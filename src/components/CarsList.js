import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCars } from '../api/car-service-api.js';

const CarsList = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetching all cars from remote api
    getAllCars().then(setCars);
  }, []);

  if (!cars) {
    return <p>Loading cars...</p>;
  }

  return (
    <div className='Cars'>
        <div>
          <h1>All Cars</h1>
          <div id='add-new-car-block'>
            <Link to={`/cars/new`}>Add new</Link>
          </div>
          <div id="cars-list">
            <ul>
              {cars.map(car => (
                <li key={car.id}>
                  <Link to={`/cars/${car.id}`}>
                    {car.model + ' ' + car.carClass + car.modelCode + ' (' + car.year + ')'};
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default CarsList;
