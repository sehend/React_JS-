
import { useState } from 'react';
import './App.css';
import Course from './Course';


function getRandomCourse() {

    const courseArray = ['Angular', 'Bootstrap5', 'Ccsharp', 'Kompleweb'];

    return courseArray[Math.floor(Math.random() * courseArray.length)]

}

function App() {

    const [courses, setCourses] = useState([])

    const handlerClick = () => {

        setCourses([...courses, getRandomCourse()])


    }

    return (

        <div className='app'>

            <button className='appButton' onClick={handlerClick }>Kurs Ekle</button>,

            <div className='courseList'> {
                courses.map((course, index) => {

                    return <Course key={index} courseName={course} />

                })

            }
           </div>


        </div>
   
  );
}

export default App;
