import { createSlice } from "@reduxjs/toolkit";

const estadoIni = {
    cont: 0,
    info: {
        nombre: 'LAURA',
        grado:  '8-C'
    }
} ;

const reducers = createSlice( {
    name: 'holaAPP',
    initialState: estadoIni,
    reducers: {
        setInc: (state,action) => {
            state.cont += action.payload ;
        },
        setDec: (state,action) => {
            state.cont -= action.payload ;
        },
        setINFO: (state,action) => {
            state.info.nombre = action.payload.name ;
            state.info.grado  = action.payload.grade ;
            state.info.nomEdi = action.payload.salon ;
        }
    }
} ) ;

export const {setInc,setDec,setINFO} = reducers.actions ;
export default reducers.reducer ;