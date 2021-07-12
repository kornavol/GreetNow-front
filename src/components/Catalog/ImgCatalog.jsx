import "./css/ImgCatalog.css";
import { Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

import { picturesDB } from "../../testDB";
import Pagination from '../Paginations';
import Filter from "./EvFilter";


const ImgCatalog = () => {

    const [category, setCategory] = useState("all");
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        setPictures(picturesBuilder(category));
    }, [category]);

    function picturesBuilder(type) {

        let forMapDb = [];

        if (type === 'all' ) {
            forMapDb = picturesDB
        } else {
            const filtredDB = picturesDB.filter(el => el.type == type)
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
            /* We could use also bachground images as output. The size (height and width) is neccessary parameter*/
             <div key={picture.id} className="picture1" style={{backgroundImage: `url('${picture.pass}')`, height:'300px', width:'100px' }} />
        });

        return newPictures;
    }

    return (
        <div className="component">
            <Filter setCategory={setCategory} category={category} />
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
