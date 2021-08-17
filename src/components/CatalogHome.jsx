
import React from 'react';
import "./css/CatalogHome.css";
import { Tabs, Tab } from "react-bootstrap";

import { useState } from "react";

import Pictures from "../components/Catalog/ImgCatalog.jsx";
import Texts from "../components/Catalog/TextsCatalog.jsx";

/* Media catalog page */
export default function CatalogHome() {
    const [key, setKey] = useState("pictures");

    return (
        <div id="catalog-home">
            <div className="catalog-home-subcontainer">
                <h1>Media Catalog</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
                <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                    <Tab xs={10} eventKey="pictures" title="Pictures">
                        <Pictures />
                    </Tab>
                    <Tab eventKey="texts" title="Texts">
                        <Texts />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
