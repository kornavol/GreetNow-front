export async function eventsTable (state)  {

    const url = 'http://localhost:8080/data/events'
    const response = await fetch(url)
    const result = await response.json()
    state = result.data
    // console.log('events-state',state);

    return state
}

