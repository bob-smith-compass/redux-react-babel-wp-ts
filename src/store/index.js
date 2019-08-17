import { createStore } from 'redux';
import { defaultState } from '../server/defaultState';
// import { defaultState } from '../server/defautState';

export const store = createStore(
    function (state = defaultState, action) {
        return state
    }
)