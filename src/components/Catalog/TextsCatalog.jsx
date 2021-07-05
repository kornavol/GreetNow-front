import { Form, Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

import Texts from "./Texts";
import Filter from "./EvFilter";
import Pagination from '../Paginations';

const TextsCatalog = () => {

    const [texts, setTexts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    

    const PostPerPage = 10;
    const IndexOfLastPost = activePage * PostPerPage; //10
    const IndexOfFirstPost = IndexOfLastPost - PostPerPage; //0
    const textPage = texts.slice(IndexOfFirstPost, IndexOfLastPost)

    useEffect(() => {
        async function getTexts() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url);
            const texts = await response.json();

            setTexts(texts)
        }
        getTexts()
    }, []);

    return (
        <div className="component">
            <Filter />
            <Container>
                <Row>
                    <Col className="d-block m-auto"><Texts texts={textPage} /></Col>
                </Row>
            </Container>
            <Pagination active={activePage} setActive={setActivePage}  />
        </div>
    );
}

export default TextsCatalog;
