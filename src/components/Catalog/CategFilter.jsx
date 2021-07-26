const CategFilter = ({ selector, setSelector }) => {
    /* Should I receive state like props (current) or better over Redux*/


    /* The values will comes though fetch */
    const categories = ['all', "mom", "general", "son"];

    const categList = categories.map(el => <option key={el} value={el}>{el}</option>)

    // console.log(selector.category);

    return (
        <div>
            <select
                id="portfolio-filter"
                className="form-control-sm"
                value={selector.category}
                onChange={(e) => {
                    setSelector((prev) => {
                        let curr = Object.assign({}, prev);  
                        curr.category = e.target.value;                        
                        return  curr ;
                    });
                }}
            >
                {categList}
            </select>
        </div>
    );
}

export default CategFilter;
