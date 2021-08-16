import React, { useState, useEffect } from 'react';
import flower1 from '../assets/test_pictures/flower1.jpg';
import flower2 from '../assets/test_pictures/flower2.jpg';
import flower3 from '../assets/test_pictures/flower3.jpg';
import flower4 from '../assets/test_pictures/flower4.jpg';
import flower5 from '../assets/test_pictures/flower5.jpg';
import flower6 from '../assets/test_pictures/flower6.jpg';
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import './css/CardRouletteAnimation.css';

const CardRoulette = (props) => {
    const items = [
    flower1,
    flower2,
    flower3,
    flower4,
    flower5,
    flower6
];

const doors = document.querySelectorAll(".door");
const rightArrowHome = props.rightArrowHome;

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

    for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("img");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.src = pool[i];
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
    spin();
}

useEffect(() => {
    init()
    //window.addEventListener("onload", spin);
    //props.rightArrowHome.addEventListener("click", animate);
    window.onload =  spin();
    //document.querySelector("#leftArrowHome").addEventListener("click", spin);
    //document.querySelector("#reseter").addEventListener("click", init);
})


/* 
    const scrollUp = () => {
        if (window.scrollY >= window.screen.height - 450) {
        spin()
        } else {
        init()
        }
    }

    useEffect(() => {
        init()
        scrollUp()
        window.addEventListener("click", spin);

    })
 */
      /* Change background color */
 /*      
  const [isScrollDown, setIsScrollDown] = useState(false);
  const checkScrollDown = () => {

    if (window.scrollY >= window.screen.height - 450) {
      setIsScrollDown(true)
    } else {
      setIsScrollDown(false)
    }
  }

  useEffect(() => {
    checkScrollDown()
    // adding the event when scroll change background
    window.addEventListener("scroll", checkScrollDown);
  })
 */

    return (
        <section id="card-roulette-container">
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

        {/* 
            <div className="buttons">
                <button id="spinner">Spin</button>
                <button id="reseter">Reset</button>
            </div>
       */}  
        
        </section>
    );
}

export default CardRoulette;