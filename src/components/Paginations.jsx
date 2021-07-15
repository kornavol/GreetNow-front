import React from 'react';
import { memo, useState, useRef } from "react";
import { Pagination } from "react-bootstrap";

const Paginations = ({active, setActive}) => {
    // const [active, setActive] = useState(1);
    /* if for this aim is using useState, will be a loop */
    const isFPact = useRef(false);
    const isLPact = useRef(false);

    /* Only for testing. This value will come outside over propse */
    const testNumOFPages = 3;

    let pagination = [];

    /* add or remove navigation arrow. Depends of page number */
    if (active == 1) {
        isFPact.current = true;
        isLPact.current = false;
    } else {
        isLPact.current = true;
    }

    if (active == testNumOFPages) {
        isFPact.current = false;
        isLPact.current = true;
    } else {
        isFPact.current = true;
    }

    for (let i = 1; i <= testNumOFPages; i++) {
        let el = null;
        /* not === becose dispatch string (innertext) */
        if (i == active) {
            el = (
                <Pagination.Item key={i} active>
                    {i}
                </Pagination.Item>
            );
        } else {
            el = (
                <Pagination.Item key={i} onClick={(e) => setActive(e.target.innerText)}>
                    {i}
                </Pagination.Item>
            );
        }
        pagination.push(el);
    }

    console.log("pagination");

    return (
        <Pagination className="ms-auto me-auto">
            {isLPact.current ? (
                <Pagination.Prev onClick={() => setActive((prev) => prev - 1)} />
            ) : null}

            {pagination}

            {isFPact.current ? (
                <Pagination.Next onClick={() => setActive((prev) => prev + 1)} />
            ) : null}
        </Pagination>
    );
};

export default memo(Paginations);
