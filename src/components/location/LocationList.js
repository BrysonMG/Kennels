import React, {useState, useEffect} from 'react'
import { getAllLocations } from '../../modules/DataManager'
import { LocationCard } from './Location'

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return getAllLocations()
            .then(allLocations => {
                setLocations(allLocations)
            })
    }

    useEffect(() => {
        getLocations()
    },[])

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} name={location.name} address={location.address} />)}
        </div>
    )
}