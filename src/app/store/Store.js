import { createStore, combineReducers } from 'redux'

function counterReducer(state = {counter: 0, rootElement:{}}, action) {
    
    switch(action.type) {
        case 'INC':
            return {
                counter : state.counter + 1,
                rootElement: state.rootElement
            }
        case 'DEC':
            return {
                counter : state.counter -1,
                rootElement: state.rootElement
            }
        case 'STYLE': {
            
            let rootElement = action.payload.elem;
            if (action.payload.id === rootElement.id) {
                rootElement.setAttribute('style', action.payload.style);    
            } else {
                var target = rootElement.querySelector('#' + action.payload.id);
                target.setAttribute('style', action.payload.style);
            }

            return {
                counter: state.counter,
                rootElement : rootElement
            }
        }
        default:
            return state;
    }

}

function counterReducer2(state = 0, action) {
    
    switch(action.type) {
        case 'INC2':
            return state + 1;
        case 'DEC2':
            return state - 1;
        default:
            return state;
    }

}

const reducers = combineReducers({
    counterReducer,
    counterReducer2
});

export const store = createStore(reducers);