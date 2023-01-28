import React from 'react';

function ImageItiem({ image }) {

    

    return (

        <div>

            <img className="imageListImg" src={image.urls.small} alt={image.alt_descripition}></img>

        </div>
  );
}

export default ImageItiem;