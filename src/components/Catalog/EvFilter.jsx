const EvFilter = ({ selector, setSelector }) => {
    /* Should I receive state like props (current) or better over Redux*/


    /* The values will comes though fetch */
    const events = ['all', "Birthday", "Wedding", "Christmas"];

    const eventList = events.map(el => <option key={el} value={el}>{el}</option>)

    // useEffect(() => {
    //     async function getEventsList() {
    //         const url = 'http://localhost:8080/media-catalog/getTexts?'+page +limit 
    //         const response = await fetch(url);
    //         const result = await response.json();
    //         const texts = result.data.texts

    //         setTexts(texts)
    //     }
    //     getTexts()
    // }, []);

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
                        return  curr ;
                    });
                    // setSelector(selector.events = eventse.target.value);
                    // setSelector(prev => console.log(prev.))
                    // console.log(e.target.value);
                }}
            >
                {eventList}
            </select>
        </div>
    );
}

export default EvFilter;
