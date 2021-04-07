import React from 'react'
import './Customer.css'

export const CustomerCard = ({name, address, phone, customer}) => (
    <section className="customer">
        <h3 className="customer__name">{name}</h3>
        <div className="customer__location">Address: {customer.address}</div>
        <div className="customer__phoneNumber">Phone Number: {phone}</div>
    </section>
)