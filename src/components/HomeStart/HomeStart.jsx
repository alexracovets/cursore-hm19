import React from 'react';
import './HomeStart.css';
import StartImage from './img/imageStart.png'
const HomeStart = () => {
    return (
        <div className="start-wrapper">
            <div className="start-img">
                <img src={StartImage} alt='StartImage' />
            </div>
            <div className="start-text">
                I am not your FATHER! It was a JOKE!!!!
            </div>
        </div>
    );
};

export default HomeStart;