import { useState } from 'react';
import ImageItiem from './ImageItem';






function ImageList({ imagePlaceHolder }) {



  return (


      <div className='imageList'>

          {
              imagePlaceHolder.map((image, index) => {

                  return <ImageItiem key={index} image={image}></ImageItiem>;

              })
          }



      </div>






  );
}

export default ImageList;