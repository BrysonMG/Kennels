import React, { useEffect, useState } from "react"
import { getAllEmployees, deleteEmployee } from '../../modules/DataManager'
import { EmployeeCard } from './Employee'
import {useHistory} from 'react-router-dom'

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const history = useHistory();

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
    <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {history.push("/employees/create")}}>
                Add Employee
            </button>
        </section>
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} id={employee.id} handleDeleteEmployee={handleDeleteEmployee} name={employee.name} position={employee.position} location={employee.location} />)}
        </div>
    </>
    )
}