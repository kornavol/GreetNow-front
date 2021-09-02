import "../css/Catalog.css";
import { Tabs, Tab } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router';

import Pictures from "../../components/Catalog/ImgCatalog.jsx";
import Texts from "../../components/Catalog/TextsCatalog.jsx";
import CardsList from "../../components/CardsList/CardsList";

/* Media catalog page */
export default function Catalog(props) {

    const [key, setKey] = useState("MyCards");
    const setModalShow = props.setModalShow;
    const location = useLocation()
    console.log('location', location.state);



    useEffect(() => {
        if (location.state == "/contacts") {
            setKey("Card")
        }
    }, []);

    return (
        <div id="media-catalog">
            <div className="media-catalog-subcontainer">
                <h1>My Cards</h1>
                <p>Lorem ipsum dolor sit amet consectetur voluptatem aut nihil.</p>
                <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)} className="catalog-tab">
                    <Tab eventKey="MyCards" title="My Cards" >
                        <CardsList createdBy={'user'} />
                    </Tab>
                    <Tab xs={10} eventKey="Card" title="Upcoming Cards" >
                        <CardsList createdBy={'app'} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
