import './css/ImgSelection.css';
import React, { useState } from 'react';
import ImgCatalog from '../Catalog/ImgCatalog';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';

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
            <h4 onClick={()=>setCatalog(imgCatalog)}><ImageSearchOutlinedIcon/> Open Image Catalog</h4>
        </div>
    );
}

export default ImgSelection;
