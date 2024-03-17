import React,{useReducer,useContext,createContext} from "react";

//Prepare the DataLAyer
export const StateContext= createContext({

});


//Wrap the app and provide Data layer
export const StateProvider=({reducer,initialState,children})=>{
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
}


//Pull the data
export const useStateValue=()=>{useContext(StateContext)};