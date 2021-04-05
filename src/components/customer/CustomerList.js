import React, {useEffect, useState} from 'react'
import { CustomerCard } from './Customer'
import { getAllCustomers } from '../../modules/DataManager'

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return getAllCustomers()
            .then(allCustomers => {
                setCustomers(allCustomers)
            })
    }

    useEffect(() => {
        getCustomers()
    },[])

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard key={customer.id} name={customer.name} address={customer.address} />)}
        </div>
    )
}