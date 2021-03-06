import React from "react"
import { Route, Redirect } from "react-router-dom"
//import { CustomerCard } from "./customer/Customer"
//import { EmployeeCard } from "./employee/Employee"
import { Home } from "./Home"
//import { LocationCard } from "./location/Location"
//import { AnimalCard } from './animal/AnimalCard'
import { AnimalList } from './animal/AnimalList'
import { EmployeeList } from './employee/EmployeeList'
import { LocationList } from './location/LocationList'
import { CustomerList } from './customer/CustomerList'
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { EmployeeForm } from "./employee/EmployeeForm"
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import {AnimalEditForm} from './animal/AnimalEditForm'

export const ApplicationViews = () => {
    const isAuthenticated = () => sessionStorage.getItem("kennel_customer") !== null;

    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                {isAuthenticated() ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
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

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
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