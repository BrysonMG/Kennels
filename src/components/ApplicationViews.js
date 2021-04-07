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
import {AnimalDetail} from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            {/*
            This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack
            */}
        </>
    )
}