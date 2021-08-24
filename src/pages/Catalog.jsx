
import React from 'react';
import "./css/Catalog.css";
import { Tabs, Tab } from "react-bootstrap";

import { useState } from "react";
import { useHistory } from 'react-router';

import Pictures from "../components/Catalog/ImgCatalog.jsx";
import Texts from "../components/Catalog/TextsCatalog.jsx";
import CardsList from '../components/CardsList/CardsList';

/* Media catalog page */
export default function Catalog(props) {

    const [key, setKey] = useState("pictures");
    const setModalShow = props.setModalShow;
    const history = useHistory()
    console.log('history', history.goBack);

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
                    {/* new component - CardList */}
                    <Tab eventKey="usersCards" title="Your Cards" >
                        <CardsList/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
