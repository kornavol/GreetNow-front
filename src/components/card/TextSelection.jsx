import './css/TextSelection.css';
import React, { useState } from 'react';
import TextsCatalog from '../Catalog/TextsCatalog';

const TextSelection = () => {
    const [catalog, setCatalog] = useState(null);

    const txtCatalog = (
        <div className='cat-popup-win' onClick={()=>setCatalog(null)}>
            <TextsCatalog/>
        </div>
    );


    return (
        <div>
            {catalog}
            <h4 onClick={()=>setCatalog(txtCatalog)}>Text Catalog</h4>
        </div>
    );
}

export default TextSelection
