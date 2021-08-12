import './css/ImgSelection.css';
import React, { useState } from 'react';
import ImgCatalog from '../Catalog/ImgCatalog';

const ImgSelection = () => {
    const [catalog, setCatalog] = useState(null);
    

    //to work on it
    const imgCatalog = (
        <div className='cat-popup-win'>
            <ImgCatalog onClick={()=>setCatalog(null)}/>
        </div>
        );

    return (
        <div>
            {catalog}
            <h4 onClick={()=>setCatalog(imgCatalog)}>Image Catalog</h4>
        </div>
    );
}

export default ImgSelection;
