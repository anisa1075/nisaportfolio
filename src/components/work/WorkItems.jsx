// import React from 'react'
import PropTypes from 'prop-types';

const WorkItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} className="work__button" target='_blank'>
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    )
}

WorkItems.propTypes = {
    item: PropTypes.object.isRequired,
};

export default WorkItems