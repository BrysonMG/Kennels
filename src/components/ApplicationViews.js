import React from "react"
import { Route } from "react-router-dom"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import { Home } from "./Home"
import { LocationCard } from "./location/Location"
import { AnimalCard } from './animal/AnimalCard'

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard/>
            </Route>

            <Route path="/locations">
                <LocationCard/>
            </Route>

            <Route path="/customers">
                <CustomerCard/>
            </Route>

            <Route path="/employees">
                <EmployeeCard/>
            </Route>
        </>
    )
}