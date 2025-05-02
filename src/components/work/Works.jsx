// import React from 'react'
import { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data"
import WorkItems from "./WorkItems";

const Works = () => {
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((projects) => {
                return projects.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleCLick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    }

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) => handleCLick(e, index)} key={index} className={`${active === index ? "active-work" : ""} work__item`}>{item.name}</span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return (
                        <WorkItems item={item} key={item.id} />
                    )
                })}
            </div>
        </div>

    )
}

export default Works