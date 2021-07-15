import "./css/ImgCatalog.css";
import { Container, Col, Row } from "react-bootstrap";

import { useState, useEffect } from "react";

// import { picturesDB } from "../../testDB";
import Filter from "./EvFilter";
import Pagination from '../Paginations';
import reactDom from "react-dom";



const ImgCatalog = () => {

    const [category, setCategory] = useState("all");
    const [pictures, setPictures] = useState([
        {categories: [],
        events: ["Birthday"],
        name: "Bth-1.png",
        _id: "1"}
    ]);

    useEffect(() => {
        // const page = `page=${activePage}`
        // const limit = `limit=${PostPerPage}`

        const url = 'http://localhost:8080/media-catalog/getPictures'
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        fetch(url, options).then(respond => respond.json().then(result => {
            if (result.status == 'success') {

                setPictures(prev => prev = [...prev, ...result.data])
                
                console.log(result.data);


            } else {
                console.log(result.message);
            }

        }));

        // setPictures(picturesBuilder(category));
    }, [category]);


    console.log(pictures);


    function picturesBuilder(type) {

        let forMapDb = [];

        if (type === 'all' ) {
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
                    {/* <Col className="d-block m-auto">{pictures}</Col> */}
                </Row>
            </Container>
            <Pagination/>
        </div>
    );
};

export default ImgCatalog;
