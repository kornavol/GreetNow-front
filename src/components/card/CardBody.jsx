import './css/CardBody.css';
import React, { useState } from 'react';
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import FrontPage from './FrontPage';
import BackPage from './BackPage';
import ImgSelection from './ImgSelection';
import TextSelection from './TextSelection';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import WallpaperOutlinedIcon from '@material-ui/icons/WallpaperOutlined';

export default function CardBody(props) {

    //const previewButton = <div className="preview-button"><a className="preview-btn" href="/card">Preview</a></div>;

    const frwArrow = <div id="card-frw-arrow" onClick={()=>cardPageHandler(backArrow, <TextSelection/>, true)}><h4><CreateOutlinedIcon/> Edit Text <FiChevronRight/></h4></div>;
    const backArrow = <div id="card-back-arrow" onClick={()=>cardPageHandler(frwArrow, <ImgSelection/>, false)}><h4> <FiChevronLeft/><WallpaperOutlinedIcon/> Cover Image </h4></div>;

    const [arrow, setArrow] = useState(frwArrow);
    const [isClicked, setIsClicked] = useState (false);

    function cardPageHandler(arrow, catalog, click){
        setArrow(arrow);
        setIsClicked(click);
        props.catalog(catalog);
    }

    return (
        <div id="card-body-container">
            <div id="card-body">
                <div className="editor-flip-card">
                    <FrontPage isClicked={isClicked}/>
                    <div className="editor-flip-card-text">
                        <h2>Greetings!</h2>
                        <BackPage/>
                        <h4>Greet Now</h4>
                    </div>
                </div>
            </div>
            {arrow}
        </div>
    );
}
