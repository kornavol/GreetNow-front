import './css/Catalog.css';
import { Tabs, Tab } from 'react-bootstrap';

import { useState } from 'react';

import Pictures from '../components/Catalog/ImgCatalog.jsx';
import Texts from '../components/Catalog/TextsCatalog.jsx';

/* Media catalog page */
export default function Catalog() {

    const [key, setKey] = useState('pictures');

    return (
        <div id="media-catalog">
            <Tabs
                id="tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}

            >
                <Tab eventKey="pictures" title="Pictures">
                    {/* <Pictures /> */}
                </Tab>
                <Tab eventKey="texts" title="Texts">
                    <Texts />
                </Tab>
            </Tabs>
        </div>
    );
}
