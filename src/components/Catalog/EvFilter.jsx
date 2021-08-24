/* Should I receive state like props (current) or better over Redux*/
import React from "react";
const EvFilter = ({ selector, setSelector }) => {
  /* The values will comes though fetch */
  const events = ["all", "Birthday", "Wedding", "Christmas"];

  const eventList = events.map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));

  return (
    <div>
      <select
        id="portfolio-filter"
        value={selector.events}
        onChange={(e) => {
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
};

export default EvFilter;
