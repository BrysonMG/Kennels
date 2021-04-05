import React, { useEffect, useState } from "react"
import { getAllEmployees, deleteEmployee } from '../../modules/DataManager'
import { EmployeeCard } from './Employee'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
            .then(allEmployees => {
                setEmployees(allEmployees)
            })
    }

    const handleDeleteEmployee = (id) => {
        deleteEmployee(id)
            .then(() => getAllEmployees().then(setEmployees))
    }

    useEffect(() => {
        getEmployees()
    },[]);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} id={employee.id} handleDeleteEmployee={handleDeleteEmployee} name={employee.name} position={employee.position} location={employee.location} />)}
        </div>
    )
}