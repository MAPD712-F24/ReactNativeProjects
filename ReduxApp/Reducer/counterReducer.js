
export default function counterReducer(state = 0, action) { 

    switch (action.type) {
        case 'INCREASE':
            return state + action.value;
        
        case 'DECREASE':
            return state - action.value;
        
        case 'TIMES':
            return state * action.value;
        
        case 'ZERO':
            return  (state = 0);
        
        default: return state;

    }
}