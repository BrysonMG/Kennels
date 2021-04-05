import React from "react"
import { Route } from "react-router-dom"
//import { CustomerCard } from "./customer/Customer"
//import { EmployeeCard } from "./employee/Employee"
import { Home } from "./Home"
//import { LocationCard } from "./location/Location"
//import { AnimalCard } from './animal/AnimalCard'
import { AnimalList } from './animal/AnimalList'
import { EmployeeList } from './employee/EmployeeList'
import { LocationList } from './location/LocationList'
import { CustomerList } from './customer/CustomerList'

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <AnimalList/>
            </Route>

            <Route path="/locations">
                <LocationList/>
            </Route>

            <Route path="/customers">
                <CustomerList/>
            </Route>

            <Route path="/employees">
                <EmployeeList/>
            </Route>
        </>
    )
}