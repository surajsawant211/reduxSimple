// Redux swag:-

import { useContext } from "react"
import { useSelector } from "react-redux"

// -it is state management library for react.
// -redux is the library which is used to mainain the states of the application in a single place is called store.
// - Three important things in the redux.
//     1.Action : in action we have to just remember what to do.Action is the plain js object which have type field.
        // for ex-
            return{
                type:'INCREMENT',
                payload:true
            }
        // Action creator:-
            export const incNumber =()=>{
                 return{
                    type:'INCREMENT',
                    payload:true
            }
            }
    // 2.Reducer: in reducer we have to just remember how to do.Reducer is the function which takes current state and action and returns a new state.

    // for ex- 
        const initialstate=0
        const changetheNumber =(state=initialstate,action)=>{
            switch(action.type){
                case "INCREMENT":return state + action.payload
                case "DECREMENT": return state - 1
                default: return state
            }
        }
    // 3.store


    // 1. first we install the react redux for connection command :- npm i redux react-redux
    // 2.for storing the multiple reducers we just use the combinereducer [inport {combineReducer} from './redux']
    
    getState()​
    //  It retrieves the current state of the Redux store

    disaptch()
    // The second and the most commonly used chore method is called dispatch.It lets you dispatch actions to change the state of your application

    suscribe()
    // always log into the console gets boring, so we're actually going to render something to the 
    // body with the help of the third Redux store method, called subscribe.


    // we are going to use useContext in react and useSelector in redux ibstead of consumer