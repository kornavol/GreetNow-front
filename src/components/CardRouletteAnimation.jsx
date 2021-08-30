import React, { useState, useEffect } from 'react';
import rouletteCard from '../assets/roulette-card.png';
import './css/CardRouletteAnimation.css';
import { Link } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { sendPict } from '../actions';
import { sendText } from '../actions';
import { useHistory } from 'react-router-dom';
import EventFilter from './EventFilter';
import EvFilter from './Catalog/EvFilter';


const CardRoulette = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [picturesArr, setPicturesArr] = useState([]);
    const event = props.event;
    const relationship = props.relationship;
    const [currEvent, setCurrEvent] = useState('&')
    const [items, setItems] = useState([]);
    console.log('relationship: '+relationship);
    console.log('event: '+event.events);

    useEffect(() => {
        if(event.events !== 'all'){
            setCurrEvent(`&event=${event.events}`);
        }else{
            setCurrEvent('&');
        }
    }, [event]);

    useEffect(() => {
        let urlPictures = 'http://localhost:8080/media-catalog/getPictures?' + "&" + currEvent + '&';
        fetch(urlPictures).then(respond => respond.json().then(result => {
            if (result.status == 'success') {
                const pictures = result.data.pictures;
                const itemArr = [];
                pictures.map(pic=>itemArr.push(`http://localhost:8080/greeting-pictures/${pic.name}`));
                setItems(itemArr);
                setPicturesArr(pictures);
                init();
            } else {
                console.log(result.message);
            }
        }));
    }, [currEvent]);
    
    const doors = document.querySelectorAll(".door");

    async function spin() {
        init(false, 1, 2);
        for (const door of doors) {
        const boxes = door.querySelector(".boxes");
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = "translateY(0)";
        await new Promise((resolve) => setTimeout(resolve, duration * 100));
        }
    }

    function fetchText(picEvent){
        function textHandler(eventPass){
            let urlTexts = "http://localhost:8080/media-catalog/getTexts?" + "&" + `${eventPass}` + '&';
            fetch(urlTexts).then(respond => respond.json().then(result => {
                if (result.status == 'success') {
                    const textArr = [];
                    const texts = result.data.texts;
                    console.log('texts: ' +texts);
                    console.log('relationship: '+relationship);
                    texts.map(item=>{
                        item.categories.filter(cat => {
                        if(relationship.includes(cat)){
                            textArr.push(item.text);
                        }
                    })});
                    const text = textArr[Math.floor(Math.random() * textArr.length)];
                    console.log(text);
                    dispatch(sendText(text));
                    history.push('/card-editor');
                } else {
                    console.log(result.message);
                }
            }));
        }

        if(event.events !== 'all'){
            textHandler(currEvent);
        }else{
            textHandler(picEvent);
        }
    }

    function init(firstInit = true, groups = 1, duration = 1) {
        for (const door of doors) {
        if (firstInit) {
            door.dataset.spinned = "0";
        } else if (door.dataset.spinned === "1") {
            return;
        }

        const boxes = door.querySelector(".boxes");
        const boxesClone = boxes.cloneNode(false);

        const pool = [rouletteCard];
        if (!firstInit) {
            const arr = [];

            for (let n = 0; n < (groups > 0 ? groups : 1); n++) {

            arr.push(...items);
            }

            pool.push(...shuffle(arr));

            boxesClone.addEventListener(
            "transitionstart",
            function () {
                door.dataset.spinned = "1";
                this.querySelectorAll(".box").forEach((box) => {
                box.style.filter = "blur(1px)";
                });
            },
            { once: true }
            );

            boxesClone.addEventListener(
            "transitionend",
            function () {
                this.querySelectorAll(".box").forEach((box, index) => {
                box.style.filter = "blur(0)";
                if (index > 0) this.removeChild(box);
                });
            },
            { once: true }
            );
        }

        function selectImg(img){
            const picture = picturesArr.find(obj => obj.name === `${img}`);
            dispatch(sendPict(picture));
            fetchText(`&event=${picture.events}`);
        }

        for (let i = pool.length - 1; i >= 0; i--) {
            const box = document.createElement("img");
            box.classList.add("box");
            box.style.width = door.clientWidth + "px";
            box.style.height = door.clientHeight + "px";
            box.src = pool[i];
            box.onclick=()=>selectImg(box.src.substring(box.src.lastIndexOf('/')+1));
            boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${
            door.clientHeight * (pool.length - 1)
        }px)`;
        door.replaceChild(boxesClone, boxes);
        }
    }

    function shuffle([...arr]) {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr
    }

    const animate = () => {
        init();
        spin();
    }

    useEffect(()=>{
        spin();
    });

    return (
        <section id="roulette-animation-container">
            <div className="doors">
                <div className="frame1">
                    <div className="door">
                        <div className="boxes"></div>
                    </div>
                </div>
                <div className="frame2">
                    <div className="door">
                        <div className="boxes"></div>
                    </div>
                </div>
                <div className="frame3">
                    <div className="door">
                        <div className="boxes"></div>
                    </div>
                </div>
            </div>

            <div id="card-roulette-btn" className="card-roulette-button glow-on-hover">
                <Link to="#" id="spinner" className="roulette-btn" onClick={animate}>SPIN</Link>
            </div>
        </section>
    );
}

export default CardRoulette;
