import './css/CardBody.css';
import React, { useState } from 'react';
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import FrontPage from './FrontPage';
import BackPage from './BackPage';
import ImgSelection from './ImgSelection';
import TextSelection from './TextSelection';

export default function CardBody(props) {

    const frwArrow = <div id="card-frw-arrow" onClick={()=>cardPageHandler(<BackPage/>, backArrow, <TextSelection/>)}><h4>Back</h4><h1><FiChevronRight/></h1></div>;
    const backArrow = <div id="card-back-arrow" onClick={()=>cardPageHandler(<FrontPage/>, frwArrow, <ImgSelection/>)}><h4>Front</h4><h1><FiChevronLeft/></h1></div>;

    const [cardPage, setCardPage] = useState(<FrontPage/>);
    const [arrow, setArrow] = useState(frwArrow);

    function cardPageHandler(page, arrow, catalog){
        setCardPage(page);
        setArrow(arrow);
        props.catalog(catalog);
    }

    return (
        <div id="card-editor">
            {cardPage}
            {arrow}
        </div>
    );
}
