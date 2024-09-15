const carServiceURL = 'http://localhost:8080';

export const getAllCars = async () => {
    const response = await fetch(`${carServiceURL}/api/v1/cars`);
    const data = await response.json();
    return data;
};

export const getCarById = async (id) => {
    const response = await fetch(`${carServiceURL}/api/v1/cars/${id}`);
    const data = await response.json();
    return data;
};

export const createCar = async (car) => {
    const response = await fetch(`${carServiceURL}/api/v1/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    const data = await response.json();
    return data;
};

export const updateCar = async (id, car) => {
    const response = await fetch(`${carServiceURL}/api/v1/cars/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    const data = await response.json();
    return data;
};
  
export const deleteCarById = async (id) => {
    const response = await fetch(`${carServiceURL}/api/v1/cars/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};
  