import React from 'react'
import './Location.css'

export const LocationCard = ({name, address, id, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">{name}</h3>
        <div className="location__address">{address}</div>
        <button type="button" onClick={() => handleDeleteLocation(id)}>Close Location</button>
    </section>
)