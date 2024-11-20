
export const increase = (num) => { 
    return {
        type: 'INCREASE',
        value : num
    }
}
export const decrease = (num) => { 
    return {
        type: 'DECREASE',
        value : num
    }
}
export const times = (num) => { 
    return {
        type: 'TIMES',
        value : num
    }
}
export const setToZero = () => { 
    return {
        type: 'ZERO',
        value : 0
    }
}