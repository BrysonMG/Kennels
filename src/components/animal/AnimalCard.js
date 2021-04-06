import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom";

export const AnimalCard = ({ name, breed, id, handleDeleteAnimal }) => (
    <div className="card">
        <div className="card-content">
            <h3>Name: <span className="card-petname">
                {name}
            </span></h3>
            <p>Breed: {breed}</p>
            <button type="button" onClick={() => handleDeleteAnimal(id)}>Discharge</button>
            <Link to={`/animals/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    </div>
)