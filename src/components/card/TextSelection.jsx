import './css/TextSelection.css';
import React, { useState } from 'react';
import TextsCatalog from '../Catalog/TextsCatalog';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';

const TextSelection = () => {
    const [catalog, setCatalog] = useState(null);

    const txtCatalog = (
        <div className='cat-popup-win'>
            <TextsCatalog onClick={()=>setCatalog(null)}/>
        </div>
    );


    return (
        <div>
            {catalog}
            <h4 onClick={()=>setCatalog(txtCatalog)}><LibraryBooksOutlinedIcon/> Open Text Catalog</h4>
        </div>
    );
}

export default TextSelection
