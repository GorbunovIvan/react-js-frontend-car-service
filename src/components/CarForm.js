import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';

const CarForm = (props) => {

  const { id } = useParams(); // Get car id from URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (props.editing) {
      // Dummy car, it must be fetched by id later
      setCar(
        {
          id: 1,
          model: 'BMW',
          class: 'X',
          modelCode: '5',
          year: 2016
        }
      )
    } else {
      setCar(
        {
          model: '',
          class: '',
          modelCode: '',
          year: 0
        }
      )
    }
  }, [props.editing]); // Ensures that this code will be called only when `props.editing` changes

  if (!car) {
    return <p>Loading car form...</p>;
  }

  return (
    <div className='CarForm'>
        <h1>{props.editing ? 'Editing car' : 'Adding new car'}</h1>
        <form action='/cars'>
          <div>
            <label htmlFor='model'>Model </label>
            <input id='model' type='text' defaultValue={car.model} onChange={e => car.model = e.target.value}/>
          </div>
          <div>
            <label htmlFor='class'>Class </label>
            <input id='class' type='text' defaultValue={car.carClass} onChange={e => car.carClass = e.target.value}/>
          </div>
          <div>
            <label htmlFor='model-code'>Model-code </label>
            <input id='model-code' type="text" defaultValue={car.modelCode} onChange={e => car.modelCode = e.target.value}/>
          </div>
          <div>
            <label htmlFor='year'>Year </label>
            <input id='year' type='number' defaultValue={car.year} onChange={e => car.year = e.target.value}/>
          </div>
          <div>
            <button type='submit'>
                {props.editing ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
  );
}

export default CarForm;
