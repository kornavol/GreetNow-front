import "./css/ImgCatalog.css";
import background from "../../assets/test_pictures/birthday1.jpg";
import { Form, Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

import { picturesDB } from "../../testDB";
import Pagination from '../Paginations';
import Filter from "./EvFilter";



/* ! Form.Select for some reason not working */

const ImgCatalog = () => {
    // const Filter = () => {
    //     return (
    //         <div>

    //             <Form.Select aria-label="Default select example">
    //                 <option>all</option>
    //                 <option value="1">Birthday</option>
    //                 <option value="2">Weding</option>
    //                 <option value="3">Christmas</option>
    //             </Form.Select>
    //         </div>
    //     )
    // }

    /* For rendering filters */
    

    const [selector, setSelector] = useState("all");
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        setPictures(renderPictures(selector));
    }, [selector]);

    function renderPictures(type) {

        const filtredDB = picturesDB.filter(el => el.type == type)

        let forMapDb = [];

        if (filtredDB.length == 0 ) {
            forMapDb = picturesDB
        } else {
            forMapDb = filtredDB
        }


        const newPictures = forMapDb.map((picture) => {
            return (
                <img
                    key={picture.id}
                    className="picture"
                    src= {picture.pass }
                />
            );
            /* why i coudnt use as backround=image */
            // <div key={picture.id} className="picture1" style={{backgroundImage: `url(${background})` }} />
        });

        return newPictures;
    }

    return (
        <div className="component">
            <Filter setSelector={setSelector} selector={selector} />
            <Container>
                <Row>
                    <Col className="d-block m-auto">{pictures}</Col>
                </Row>
            </Container>
            <Pagination/>
        </div>
    );
};

export default ImgCatalog;
