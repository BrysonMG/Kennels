import React, {useState, useEffect} from 'react'
import { getAllLocations, deleteLocation } from '../../modules/DataManager'
import { LocationCard } from './Location'

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return getAllLocations()
            .then(allLocations => {
                setLocations(allLocations)
            })
    }

    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(() => getAllLocations().then(setLocations))
    }

    useEffect(() => {
        getLocations()
    },[])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} id={location.id} handleDeleteLocation={handleDeleteLocation} name={location.name} address={location.address} />)}
        </div>
    )
}