import { createStore } from "redux";


const estadoInicial  = {
    cont: 0
}

const reducer = (state=estadoInicial,action) =>{

    switch(action.type){
        case 'INCREMENT':
            return {...state,cont : state.cont + action.inc};
        case 'DECREMENT':
            return {...state,cont : state.cont - action.dec};
        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;
