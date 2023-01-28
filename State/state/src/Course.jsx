import React from 'react';
import Angular from './images/angular.jpg';
import Bootstrap5 from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';
import './Course1.css';

const coureseMap = {

    Angular: Angular,

    Bootstrap5: Bootstrap5,

    Ccsharp: Ccsharp,

    Kompleweb: Kompleweb

}


function Course({ courseName }) {
    return (

        <div className='courseDiv'><img className='course1' src={coureseMap[courseName]}></img></div>

    );
}

export default Course;