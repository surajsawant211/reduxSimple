const initialState = 0;

const changetheNumber=(state= initialState,action)=>{
    switch (action.type) {
        case "INCREMENT" : return state + action.payload
        case "DECREMENT" : return state - action.payload
        default: return state;
    }
}

export default changetheNumber