const remoteURL = "http://localhost:5002";

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees/?_expand=location`)
        .then(res=>res.json())
}

export const addEmployee = (newEmployee) => {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }).then(response => response.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    })
        .then(res=>res.json())
}




export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
        .then(res=>res.json())
}

export const getLocationById = id => {
    return fetch(`${remoteURL}/locations/${id}`)
        .then(res=>res.json())
}

export const addLocation = (newLocation) => {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(response => response.json())
}

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE"
    })
        .then(res=>res.json())
}





export const getAllOwners = () => {
    return fetch(`${remoteURL}/owners`)
        .then(res=>res.json())
}

export const addOwner = (newOwner) => {
    return fetch(`${remoteURL}/owners`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOwner)
    }).then(response => response.json())
}

export const deleteOwner = (id) => {
    return fetch(`${remoteURL}/owners/${id}`, {
        method: "DELETE"
    })
        .then(res=>res.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/owners`)
        .then(res=>res.json())
}