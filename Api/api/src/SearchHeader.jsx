import React from 'react';
import { useState } from 'react';

function SearchHeader({ search }) {

    const [valueINput, setValue]=useState('')


    const HandlerFormSubmit = (event) => {
        event.preventDefault();
        search(valueINput);
    }

    const handlerChange = (event) => {

       setValue(event.target.value);

    }
    return (
        <div className="searchDiv">
            <form onSubmit={HandlerFormSubmit}>

                <label>Ne Ariyorsunuz?</label>

                <input value={valueINput} onChange={handlerChange } ></input>
               
            </form>

        </div>

       
    );
}

export default SearchHeader;