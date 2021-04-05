import React from 'react'
import './Customer.css'

export const CustomerCard = ({name, address}) => (
    <section className="customer">
        <h3 className="customer__name">{name}</h3>
        <div className="customer__location">Address: {address}</div>
    </section>
)