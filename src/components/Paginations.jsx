import React, { memo, useRef } from "react";
import { Pagination } from "react-bootstrap";

const Paginations = ({ active, setActive, totalPages }) => {
    /* if for this goal using useState, will be a loop */
    const isFPage = useRef(false);
    const isLPage = useRef(false);

    let pagination = [];

    /* Rules to show navigation arrows. 
    Add or remove navigation arrows. Depends of page number. 
    */
    if (active === 1) {
        isFPage.current = true;
        isLPage.current = false;
    } else {
        isLPage.current = true;
    }

    if (active === totalPages) {
        isFPage.current = false;
        isLPage.current = true;
    } else {
        isFPage.current = true;
    }

    if (totalPages === 1) {
        isFPage.current = false;
        isLPage.current = false;
    }

    for (let i = 1; i <= totalPages; i++) {
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
                <Pagination.Item
                    key={i}
                    onClick={(e) => setActive(parseInt(e.target.innerText))}
                >
                    {i}
                </Pagination.Item>
            );
        }
        pagination.push(el);
    }

    /* limitation of pagination */
    if (pagination.length > 3) {
        let startIndex = active - 2;
        let lastIndex = active + 1;

        if (startIndex < 0) {
            startIndex = 0;
            lastIndex++;
        }

        pagination = pagination.slice(startIndex, lastIndex);
    }

    return (
        <Pagination className="ms-auto me-auto">
            {isLPage.current ? (
                <Pagination.Prev onClick={() => setActive((prev) => prev - 1)} />
            ) : null}

            {pagination}

            {isFPage.current ? (
                <Pagination.Next onClick={() => setActive((prev) => prev + 1)} />
            ) : null}
        </Pagination>
    );
};

export default memo(Paginations);
