import logo from './logo.svg';
import './App.css';
import Course from './Course';
import Angular1 from './images/angular.jpg';
import Bootstrap5 from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';
import "./bulma/css/bulma.css";

function App() {
  return (
      <div className="App">

 
          <div classname='container'>

              <div className='columns'>

                  <div className= 'column'>

                      <Course image={Angular1} title="Angular" description="asdadsdsadsasdasa"></Course>

                  </div>

                  <div className='column'>

                      <Course image={Bootstrap5} title="Bootstrap 5" description="asdadsdsadsasdasa"></Course>

                  </div>

                  <div className='column'>

                      <Course image={Ccsharp} title="Ccsharp" description="asdadsdsadsasdasa"></Course>

                  </div>

                  <div className='column'>

                      <Course image={Kompleweb} title="FrontEnd" description="asdadsdsadsasdasa"></Course>

                  </div>

              </div>


          </div>
       

  

       

     


    </div>
  );
}

export default App;
