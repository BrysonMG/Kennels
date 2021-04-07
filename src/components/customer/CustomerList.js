import React, {useEffect, useState} from 'react'
import { CustomerCard } from './Customer'
import { getAllOwners } from '../../modules/DataManager'

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return getAllOwners()
            .then(allCustomers => {
                setCustomers(allCustomers)
            })
    }

    useEffect(() => {
        getCustomers()
    },[])

    return (
        <div className="container-cards">
            {customers.map(customer => {
            return <CustomerCard 
            key={customer.id} 
            customer={customer} 
            name={customer.name} 
            address={customer.address} 
            phone={customer.phoneNumber} />})}
        </div>
    )
}