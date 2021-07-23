import { Form, Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

import Texts from "./Texts";
import Filter from "./EvFilter";
import Pagination from '../Paginations';

const TextsCatalog = () => {

    const [texts, setTexts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [category, setCategory] = useState({events:"all", category:"all"});
    const [totalPages, setTotalPages] = useState(3);

    const PostPerPage = 1;
    // const IndexOfLastPost = activePage * PostPerPage; //10
    // const IndexOfFirstPost = IndexOfLastPost - PostPerPage; //0
    // const textPage = texts.slice(IndexOfFirstPost, IndexOfLastPost)
    
    //page=1&limit=5&event=Birthday
    useEffect(() => {
        const page = `page=${activePage}`
        const limit = `limit=${PostPerPage}`

        async function getTexts() {
            const url = 'http://localhost:8080/media-catalog/getTexts?'+page +"&" + limit 
            const response = await fetch(url);
            const result = await response.json();

            const texts = result.data.texts
            const tPages = result.data.pages.totalPages

            console.log(tPages);

            setTexts(texts)
            setTotalPages(tPages)
        }
        getTexts()
        
    }, [activePage]);

    // console.log(texts);

    return (
        <div className="component">
            <Filter setSelector={setCategory} selector={category} />
            <Container>
                <Row>
                    <Col className="d-block m-auto"><Texts texts={texts} /></Col>
                </Row>
            </Container>
            <Pagination 
            active={activePage} 
            setActive={setActivePage}
            totalPages={totalPages}  />
        </div>
    );
}

export default TextsCatalog;
