import { Form, Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

import Pagination from '../Paginations';
import Filter from "./EvFilter";

const TextsCatalog = () => {

    async function  getTexts() {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url);
        const texts = await response.json();
    
        console.log(texts);

        
    }

    getTexts()

    
    return (
        <div className="component">
        <Filter />
        <Container>
            <Row>
                Texts
                {/* <Col className="d-block m-auto">{texts}</Col> */}
            </Row>
        </Container>
        <Pagination/>
    </div>
    );
}

export default TextsCatalog;
