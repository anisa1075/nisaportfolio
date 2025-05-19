// import React from 'react'
import { useState } from "react"
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">

                {/* tabs judul */}
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex"
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className="qualification__button qualification__active button--flex"
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">

                    {/* content 1 */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {/* data 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineering</h3>
                                <span className="qualification__subtitle">IDN Polytechnic Bogor</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* data 2 */}
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Network Computer</h3>
                                <span className="qualification__subtitle">SMKN 1 Jambi</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2023
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* content 2 */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {/* data 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IT Teacher</h3>
                                <span className="qualification__subtitle">IDN Boarding School Akhwat</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* data 2 */}
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Freelancer</h3>
                                <span className="qualification__subtitle">Web Travel & School</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>
                        </div>

                       
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Qualification