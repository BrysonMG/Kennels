import React from "react"
import "./Employee.css"

export const EmployeeCard = ({name, location, position}) => (
    <section className="employee">
        <h3 className="employee__name">{name}</h3>
        <h4 className="employee__position">{position}</h4>
        <div className="employee__location">{location}</div>
    </section>
)