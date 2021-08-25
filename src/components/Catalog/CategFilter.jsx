/* Should I receive state like props (current) or better over Redux*/
import React from "react";
const CategFilter = ({ selector, setSelector }) => {

    /* The values will comes though fetch */
    const categories = ['all', "general", "friend",  "colleague"];

    const categList = categories.map(el => <option key={el} value={el}>{el}</option>)

    return (
        <div>
            <select
                id="portfolio-filter"
                value={selector.category}
                onChange={(e) => {
                    setSelector((prev) => {
                        let curr = Object.assign({}, prev);
                        curr.category = e.target.value;
                        return curr;
                    });
                }}
            >
                {categList}
            </select>
        </div>
    );
}

export default CategFilter;
