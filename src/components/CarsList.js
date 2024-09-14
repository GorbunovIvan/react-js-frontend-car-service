import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CarsList = () => {

  // Dummy cars, they must be fetched later
  const [cars, setCars] = useState([
    {
      id: 1,
      model: 'BMW',
      class: 'X',
      modelCode: '5',
      year: 2016
    },
    {
      id: 2,
      model: 'Mercedes',
      class: 'E',
      modelCode: '200',
      year: 2011
    }
  ]);

  return (
    <div className='Cars'>
        <div>
          <h1>All Cars</h1>
          <div>
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
