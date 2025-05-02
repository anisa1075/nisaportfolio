// import React from 'react'
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Anisa</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="" className="footer__social-link" target="_blank"><i className="uil uil-instagram"></i></a>
                    <a href="" className="footer__social-link" target="_blank"><i className="uil uil-linkedin"></i></a>
                    <a href="" className="footer__social-link" target="_blank"><i className="uil uil-github-alt"></i></a>
                </div>

                <span className="footer__copy">&#169; Anisa. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer