const increment = ()=> {
    return {
        type: 'INCREMENT_COUNTER',
    }
};
const decrement = ()=> {
    return {type: 'DECREMENT_COUNTER'}
};

module.exports = {
    increment,
    decrement
};