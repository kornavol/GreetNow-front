import "./css/ImgCatalog.css";
import background from "../../assets/test_pictures/birthday1.jpg";

import { Form, Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

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

    const events = ["Birthday", "Wedding", "Christmas"];

    const picturesDB = [
        {
            id: 1,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 2,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 3,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 4,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 5,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 6,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 7,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
        {
            id: 8,
            pass: "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            type: "birthday",
        },
    ];

    const [selector, setSelector] = useState("all");
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        setPictures(renderPictures);
    }, [selector]);

    function renderPictures() {
        const newPictures = picturesDB.map((picture) => {
            console.log(picture.pass);
            return (
                <img
                    key={picture.id}
                    className="picture"
                    src= {picture.pass }
                />
            );
            // <div key={picture.id} className="picture1" style={{backgroundImage: `url(${background})` }} />
        });

        console.log("render picture", newPictures);

        return newPictures;
    }

    console.log(pictures);

    const Filter = () => {
        return (
            <select
                id="portfolio-filter"
                className="form-control-sm"
                value={selector}
                onChange={(e) => {
                    setSelector(e.target.value);
                }}
            >
                <option value={"all"}>all</option>
                <option value={"Birthday"}>Birthday</option>
                <option value={"Wedding"}>Wedding</option>
                <option value={"Christmas"}>Christmas</option>
            </select>
        );
    };

    console.log("Filter rerendered");
    return (
        <div className="component">
            <Filter />
            <Container>
                <Row>
                    <Col className="d-block m-auto">{pictures}</Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImgCatalog;
