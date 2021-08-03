/* Should I receive state like props (current) or better over Redux*/
import React from "react";
const EvFilter = ({ selector, setSelector }) => {

    /* The values will comes though fetch */
    const events = ['all', "Birthday", "Wedding", "Christmas"];

    const eventList = events.map(el => <option key={el} value={el}>{el}</option>)

    return (
        <div>
            <select
                id="portfolio-filter"
                className="form-control-sm"
                value={selector.events}
                onChange={(e) => {
                    /* Why I can't change in current obj (prev) a value and return it */
                    setSelector((prev) => {
                        let curr = Object.assign({}, prev);
                        curr.events = e.target.value;
                        return curr;
                    });
                }}
            >
                {eventList}
            </select>
        </div>
    );
}

export default EvFilter;
