import React, { useEffect, useState } from 'react';
import { getAllAnimals } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard'
import { deleteAnimal } from '../../modules/AnimalManager'

export const AnimalList = () => {
    // The initial state is an empty array
    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        // After the data comes back from the API, we
        //  use the setAnimals function to update state
        return getAllAnimals().then(animalsFromAPI => {
            setAnimals(animalsFromAPI)
        });
    };

    const handleDeleteAnimal = id => {
        deleteAnimal(id)
            .then(() => getAllAnimals().then(setAnimals))
    }

    // got the animals from the API on the component's first render
    useEffect(() => {
        getAnimals();
    }, []);

    // Finally we use .map() to "loop over" the animals array to show a list of animal cards
    return (
        <div className="container-cards">
            {animals.map(animal => <AnimalCard key={animal.id} id={animal.id} name={animal.name} breed={animal.breed} handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    );
};