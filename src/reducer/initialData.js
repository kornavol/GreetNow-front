
/* Change logic regarding to Ract aproach */
let isFetching = false 

export async function eventsList (state)  {
    console.log('outside:', typeof( state));
    /* TO-Do. Andreas. Fix below dependency   */
    if (!state && !isFetching) {
        isFetching = true
        const url = 'http://localhost:8080/data/events'
        const response = await fetch(url)
        const result = await response.json()
        state = result.dat
        console.log('inside:',typeof(state));
    }
    return state
}

export async function categoriesList (state)  {

    if (!state && !isFetching) {
        const url = 'http://localhost:8080/data/categories'
        const response = await fetch(url)
        const result = await response.json()
        state = result.data    
    }
    return state
}

