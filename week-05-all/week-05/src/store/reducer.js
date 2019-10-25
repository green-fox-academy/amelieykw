const C = require("../constants");

const createCounter = (state, actions) => {
    (actions.type === C.CREATE_COUNTER) ? parseInt(actions.payload) : state;
}

const addTag = (state, actions) => {
    if (actions.type === C.ADD_TAG) {
        state.push(actions.payload);
    }
    return state;
}

const removeTag = (state, actions) => {
    if (actions.type === C.REMOVE_TAG) {
        state.pop(actions.payload);
    }
    return state;
}

const removeTags = (state, actions) => {
    if (actions.type === C.REMOVE_ALL_TAGS) {
        state = [];
    } 
    return state;
}


module.exports = createCounter;
module.exports = addTag;
module.exports = removeTag;
module.exports = removeTags;