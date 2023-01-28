import logo from './logo.svg';
import './App.css';
import SearchHeader from './SearchHeader';
import axios from '../../node_modules/axios/index';
import searchImages from './Api';
import { useState } from 'react';
import ImageList from './components/ImageList';


function App() {


    const [images, setImages] = useState([])

    const HandlerSubmit = async (term) => {

        const result = await searchImages(term);

        setImages(result);
    };



    return (

        <div className="App">

            <SearchHeader search={HandlerSubmit}></SearchHeader>

            <ImageList imagePlaceHolder={images}></ImageList>

        </div>


    );
}

export default App;
