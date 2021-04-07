import React, {useEffect, useState} from 'react';
import {getLocationById, deleteLocation} from '../../modules/DataManager';
import {useParams, useHistory} from 'react-router-dom';

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { locationId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId)
            .then(()=> {
                history.push('/locations')
            })
    }

    useEffect(() => {
        getLocationById(locationId)
            .then(location => {
                setLocation(location)
                setIsLoading(false)
            })
    },[locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location_address">Address: {location.address}</div>
            <div className="location__description">Description: {location.description}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Close Location
            </button>
        </section>
    )
}