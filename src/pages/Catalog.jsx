import './css/Catalog.css';
import { Tabs, Tab } from 'react-bootstrap';

import { useState } from 'react';

import Pictures from '../components/Catalog/ImgCatalog.jsx';
import Texts from '../components/Catalog/TextsCatalog.jsx';



export default function Catalog() {

    const [key, setKey] = useState('pictures');

    
    return (
        <div id="media-catalog">
            {/* <h4>This is the standard catalog</h4>
            <h4>This is the user catalog</h4> */}
            <Tabs
                id="tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                
            >
                <Tab eventKey="pictures" title="Pictures">
                    <Pictures />
                </Tab>
                <Tab eventKey="texts" title="Texts">
                    <Texts />
                </Tab>
            </Tabs>
        </div>
    );
}
