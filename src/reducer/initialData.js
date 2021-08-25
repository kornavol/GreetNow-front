
/* Change logic regarding to Ract aproach */
let isFetching = false 

/* Not wotking if request makes ones */

export async function eventsList (state)  {
    // console.log('outside:', state);
    /* TO-Do. Andreas. Fix below dependency   */
    if (!state) {
        isFetching = true
        const url = 'http://localhost:8080/data/events'
        const response = await fetch(url)
        const result = await response.json()
        state = result.data
        // console.log('inside:',state);
    }
    return state
}

export async function categoriesList (state)  {

    if (!state) {
        isFetching = true
        const url = 'http://localhost:8080/data/categories'
        const response = await fetch(url)
        const result = await response.json()
        state = result.data    
    }
    return state
}

