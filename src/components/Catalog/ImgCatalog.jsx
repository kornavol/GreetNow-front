import React, { useState, useEffect } from 'react';
import "./css/ImgCatalog.css";
import { Container, Col, Row } from "react-bootstrap";

import Filter from "./EvFilter";
import Pictures from "./Pictures";
import Pagination from '../Paginations';

const ImgCatalog = (props) => {

    const [pictures, setPictures] = useState([]);
    const [category, setCategory] = useState({ events: "all"});
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);
    
    const PostPerPage = 3;
    let currEvent = '&';

    if (category.events !== 'all') {
        currEvent = `&event=${category.events}`
    }
    
    useEffect(() => {
        const page = `page=${activePage}`
        const limit = `limit=${PostPerPage}`
        

        const url = 'http://localhost:8080/media-catalog/getPictures?' + page + "&" + limit + currEvent + '&'

        fetch(url).then(respond => respond.json().then(result => {
            if (result.status == 'success') {
                const pictures = result.data.pictures
                const tPages = result.data.pages.totalPages
                
                /* Merging a result of a request to one local DB.
                 Could be helpful for optimization */
                // setPictures(prev => prev = [...prev, ...result.data])
                setPictures(pictures)
                setTotalPages(tPages)
            } else {
                console.log(result.message);
            }

        }));
    }, [activePage, category]);

    return (
        <div className="component">
            <Filter setSelector={setCategory} selector={category} />
            <Container>
                <Row onClick={props.onClick}>
                    <Col className="d-block m-auto">
                        <Pictures pictures={pictures} setModalShow={props.setModalShow}/>
                    </Col>
                </Row>
            </Container>
            <Pagination
                active={activePage}
                setActive={setActivePage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default ImgCatalog;
