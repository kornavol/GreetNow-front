import { useState, useRef } from "react";
import { Pagination } from "react-bootstrap";

const Paginations = () => {
    const [active, setActive] = useState(1);
    // const [isFPact, setIsFPact] = useState(false);
    // const [isLPact, setIsLPact] = useState(false);

    const isFPact = useRef(false)
    const isLPact = useRef(false)

    const testNumOFPages = 3


    let pagination = [];


    /* add or remove arrow. Depends of page number */
    if (active == 1) {
        isFPact.current=true
        isLPact.current=false
    } else {
        isLPact.current=true
    }

    if (active == testNumOFPages) {
        isFPact.current=false
        isLPact.current=true
    } else {
        isFPact.current=true
    }



    for (let i = 1; i <= testNumOFPages; i++) {
        let el = null;
        /* not === becose dispatch string (innertext) */
        if (i == active) {
            el = <Pagination.Item key={i} active>{i} </Pagination.Item>;
        } else {
            el = <Pagination.Item key={i} onClick={ (e) => setActive(e.target.innerText)}>{i} </Pagination.Item>;
        }
        pagination.push(el);
    }

    console.log('pagination');

    return (
        <Pagination className="ms-auto me-auto">
            {/* <Pagination.First /> */}
            {isLPact.current? <Pagination.Prev /> : null}

            {pagination}

            {isFPact.current ? <Pagination.Next /> : null}
            
            {/* <Pagination.Last /> */}
        </Pagination>
    );
};

export default Paginations;
