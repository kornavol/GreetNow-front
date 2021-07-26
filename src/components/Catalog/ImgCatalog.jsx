import "./css/ImgCatalog.css";
import { Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

// import { picturesDB } from "../../testDB";
import Filter from "./EvFilter";
import Pictures from "./Pictures";
import Pagination from '../Paginations';




const ImgCatalog = () => {

    const [category, setCategory] = useState("all");
    const [pictures, setPictures] = useState(
        [{
            categories: [],
            events: ["Birthday"],
            name: "Bth-1.png",
            _id: "1"
        }]
    );
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);

    const PostPerPage = 3;
    let currEvent = '&';

    useEffect(() => {
        const page = `page=${activePage}`
        const limit = `limit=${PostPerPage}`

        const url = 'http://localhost:8080/media-catalog/getPictures?' + page + "&" + limit + currEvent + '&'

        fetch(url).then(respond => respond.json().then(result => {
            if (result.status == 'success') {
                const pictures = result.data.pictures
                const tPages = result.data.pages.totalPages

                // setPictures(prev => prev = [...prev, ...result.data])
                setPictures(pictures)
                setTotalPages(tPages)

                console.log('pictures', pictures);


            } else {
                console.log(result.message);
            }

        }));
    }, [activePage, category]);


    console.log(pictures);


    function picturesBuilder(type) {

        let forMapDb = [];

        if (type === 'all') {
            forMapDb = pictures
        } else {
            const filtredDB = pictures.filter(el => el.type == type)
            forMapDb = filtredDB
        }

        const newPictures = forMapDb.map((picture) => {
            return (
                <img
                    key={picture.id}
                    className="picture"
                    src={picture.pass}
                />

            );
            /* We could use also bachground images as output. The size (height and width) is neccessary parameter*/
            <div key={picture.id} className="picture1" style={{ backgroundImage: `url('${picture.pass}')`, height: '300px', width: '100px' }} />
        });

        return newPictures;
    }

    return (
        <div className="component">
            <Filter setSelector={setCategory} selector={category} />
            <Container>
                <Row>
                    <Col className="d-block m-auto">
                        <Pictures pictures={pictures} />
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
