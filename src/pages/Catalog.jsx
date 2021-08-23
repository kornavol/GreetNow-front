
import React from 'react';
import "./css/Catalog.css";
import { Tabs, Tab } from "react-bootstrap";

import { useState } from "react";

import Pictures from "../components/Catalog/ImgCatalog.jsx";
import Texts from "../components/Catalog/TextsCatalog.jsx";

/* Media catalog page */
export default function Catalog(props) {

    const [key, setKey] = useState("pictures");
    const setModalShow = props.setModalShow;

    return (
        <div id="media-catalog">
            <div className="media-catalog-subcontainer">
                <h1>Media Catalog</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
                <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)} className="catalog-tab">
                    <Tab xs={10} eventKey="pictures" title="Pictures" >
                        <Pictures setModalShow={setModalShow} />
                    </Tab>
                    <Tab eventKey="texts" title="Texts" >
                        <Texts setModalShow={setModalShow} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
