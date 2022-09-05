import { combineReducers } from 'redux';
import DataMapingReducer from './DataMapingReducer';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_POST":
            return [...state, { text: action.payload.text, id: action.payload.id }]
        default: return state
    }
}

const rootReducer = combineReducers({
    posts: postsReducer,
    maping: DataMapingReducer
});

export default rootReducer;