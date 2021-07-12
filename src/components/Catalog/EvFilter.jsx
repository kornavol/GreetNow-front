const EvFilter = ({ selector, setSelector }) => {
    /* Should I receive state like props (current) or better over Redux*/


    /* The values will comes though fetch */
    const events = ['all', "Birthday", "Wedding", "Christmas"];

    const eventList = events.map(el => <option key={el} value={el}>{el}</option>)

    return (
        <div>
            <select
                id="portfolio-filter"
                className="form-control-sm"
                value={selector}
                onChange={(e) => {
                    setSelector(e.target.value);
                }}
            >
                {eventList}
            </select>
        </div>
    );
}

export default EvFilter;
