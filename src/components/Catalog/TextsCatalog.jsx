import { Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

import Texts from "./Texts";
import Events from "./EvFilter";
import Categories from "./CategFilter";
import Pagination from "../Paginations";

const TextsCatalog = () => {
    const [texts, setTexts] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [category, setCategory] = useState({ events: "all", category: "all" });
    const [totalPages, setTotalPages] = useState(3);

    const PostPerPage = 3;
    let currEvent = "&";
    let currCateg = "&";

    if (category.events !== "all") {
        currEvent = `&event=${category.events}`;
    }

    if (category.category !== "all") {
        currCateg = `&category=${category.category}`;
    }

    useEffect(() => {
        const page = `page=${activePage}`;
        const limit = `limit=${PostPerPage}`;

        async function getTexts() {
            const url =
                "http://localhost:8080/media-catalog/getTexts?" +
                page +
                "&" +
                limit +
                currEvent +
                currCateg +
                "&";
            const response = await fetch(url);
            const result = await response.json();

            const texts = result.data.texts;
            const tPages = result.data.pages.totalPages;

            setTexts(texts);
            setTotalPages(tPages);
        }
        getTexts();
    }, [activePage, category]);

    return (
        <div className="component">
            <Events setSelector={setCategory} selector={category} />
            <Categories setSelector={setCategory} selector={category} />
            <Container>
                <Row>
                    <Col className="d-block m-auto">
                        <Texts texts={texts} />
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

export default TextsCatalog;
