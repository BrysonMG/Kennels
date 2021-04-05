import React from 'react'
import './Location.css'

export const LocationCard = ({name, address}) => (
    <section className="location">
        <h3 className="location__name">{name}</h3>
        <div className="location__address">{address}</div>
    </section>
)