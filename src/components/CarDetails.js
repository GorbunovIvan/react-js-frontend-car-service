import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CarDetails = () => {

  const { id } = useParams(); // Get car id from URL

  // Dummy car, it must be fetched by id later
  const [car, setCar] = useState(
    {
      id: 1,
      model: 'BMW',
      class: 'X',
      modelCode: '5',
      year: 2016
    }
  );

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
            <button type='submit'>Delete</button>
          </form>
        </div>
    </div>
  );
}

export default CarDetails;
