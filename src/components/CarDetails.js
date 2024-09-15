import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getCarById, deleteCarById } from '../api/car-service-api.js';

const CarDetails = () => {

  const { id } = useParams(); // Get car id from URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (!car) {
      // Fetching car from remote api by Id
      getCarById(id).then(setCar);
    }
  }, [id]);

  if (!car) {
    return <p>Loading car details...</p>;
  }

  return (
    <div className='CarDetails'>
        <h1>Car</h1>
        <div id='car-properties'>
            <p>Model: <span>{car.model}</span></p>
            <p>Class: <span>{car.carClass}</span></p>
            <p>Model-code: <span>{car.modelCode}</span></p>
            <p>Year: <span>{car.year}</span></p>
        </div>
        <div id='management-block'>
          <p><Link to={`/cars/${car.id}/edit`}>Edit</Link></p>
          <form action='/cars'>
            <button type='submit' onClick={() => {deleteCarById(car.id)}}>Delete</button>
          </form>
        </div>
    </div>
  );
}

export default CarDetails;
