import React, { useEffect, useState } from "react"
import { getAllEmployees } from '../../modules/DataManager'
import { EmployeeCard } from './Employee'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
            .then(allEmployees => {
                setEmployees(allEmployees)
            })
    }

    useEffect(() => {
        getEmployees()
    },[]);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} name={employee.name} position={employee.position} location={employee.location} />)}
        </div>
    )
}