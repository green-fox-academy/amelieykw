const C = require('./constants');
const createCounter = require ('./store/reducer');
const addTag = require ('./store/reducer');
const removeTag = require ('./store/reducer');
const removeTags = require ('./store/reducer');

// CREATA_COUNTER
const state = 0;

const action = {
    type: C.CREATE_COUNTER,
    payload: 1
}

const nextState = createCounter(state, action);

console.log(`
    initial counter: ${state}
    action: ${JSON.stringify(action)}
    new counter: ${nextState}
`)

// ADD_TAG
const tags = [
    "1", "2", "3"
]

const addTagAction = {
    type: C.ADD_TAG,
    payload: "new tag"
} 

const nextState_addTag = addTag(tags, addTagAction);

console.log(`
    initial counter: ${tags}
    action: ${JSON.stringify(addTagAction)}
    new counter: ${nextState_addTag}
`)
