import React, { useState, useEffect } from 'react';
import flower1 from '../assets/test_pictures/flower1.jpg';
import flower2 from '../assets/test_pictures/flower2.jpg';
import flower3 from '../assets/test_pictures/flower3.jpg';
import flower4 from '../assets/test_pictures/flower4.jpg';
import flower5 from '../assets/test_pictures/flower5.jpg';
import flower6 from '../assets/test_pictures/flower6.jpg';
import './css/CardRouletteAnimation.css';
import { useDispatch } from "react-redux";
import { sendPict } from '../actions';
import {Link} from 'react-router-dom';


const CardRoulette = (props) => {

    const dispatch = useDispatch();

    const items = [
    flower1,
    flower2,
    flower3,
    flower4,
    flower5,
    flower6
];

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

function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
    if (firstInit) {
        door.dataset.spinned = "0";
    } else if (door.dataset.spinned === "1") {
        return;
    }

    const boxes = door.querySelector(".boxes");
    const boxesClone = boxes.cloneNode(false);

    const pool = [flower5];
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
    // console.log(pool);

    function selectImg(img){
        console.log('picture: '+img);
        dispatch(sendPict(img))
    }

    for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("img");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.src = pool[i];
        box.onclick=()=>selectImg(box.src);
        boxesClone.appendChild(box);
    }
    boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
    boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
    }px)`;
    door.replaceChild(boxesClone, boxes);
    // console.log(door);
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
})

init();

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
                <Link id="spinner" className="roulette-btn" onClick={animate}>SPIN</Link>
            </div>
        </section>
    );
}

export default CardRoulette;
