function createStore (){
    // store should have four parts
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. update the state

    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listerners.filter((l)=> l !== listener )
        }

    }

    return {
        getState,
        subscribe
    }
}
