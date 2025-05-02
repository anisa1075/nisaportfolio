// import React from 'react';

import ScrollDown from "../ScrollDown";
import Data from "./Data";
import Social from "./Social";
import "./home.css";
// import profile from "../../assets/anisa.png"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className="home__img"></div>

                <Data/>
            </div>

            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home