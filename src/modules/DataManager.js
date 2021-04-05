const remoteURL = "http://localhost:5002";

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
        .then(res=>res.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
        .then(res=>res.json())
}

export const getAllOwners = () => {
    return fetch(`${remoteURL}/owners`)
        .then(res=>res.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
        .then(res=>res.json())
}