import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import {addEmployee, getAllLocations} from '../../modules/DataManager'



export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        position: "",
        locationId: 0
    });
    //const [isLoading, setIsLoading] = useState(true);
    const [locations, setLocations] = useState([])
    const history = useHistory();

    const handleInputChange = event => {
        const newEmployee = {...employee}
        let selectedLocation = event.target.value

        if (event.target.id.includes("Id")) {
            selectedLocation = parseInt(selectedLocation)
        }
        
        newEmployee[event.target.id] = selectedLocation

        setEmployee(newEmployee)
    }

    useEffect(()=> {
        getAllLocations().then(allLocations => {
            setLocations(allLocations)
        })
    },[])

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee(employee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Position" value={employee.position} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={employee.locationId} name="locationId" id="locationId" onChange={handleInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEmployee}>
                Save Employee
            </button>
        </form>
    )
}