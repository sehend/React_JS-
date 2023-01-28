import React from 'react';
import axios from '../../node_modules/axios/index';



const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 2xoCqZxQG4CG1LfXMDWRYWn1-hRbvgD8IKJfqzlwKm0',
        },
        params: {
            query: term,
        }
    })

    const sehend = response.data.results;

    console.log(sehend);



    return response.data.results;



};

export default searchImages;