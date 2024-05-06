import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// createSlice - main API function to define redux logic
// PayloadAction - redux types, defines that this is the given contents of one single action object

export enum AlertType { Success, Failure }

interface AlertState {
    visible: boolean,
    type: AlertType | null,
    message: string 
}

const initialState: AlertState = {
    visible: false,
    type: null,
    message: ''
}

const alertSlice = createSlice( { 
    name: 'alert',
    initialState,
    reducers: {
        // We can directly mutate state; immer handles all the copying and spreading in the background
        triggerSuccessAlert( state, action: PayloadAction<string> ) {
            state.visible = true 
            state.type = AlertType.Success
            state.message = action.payload
        },

        triggerFailureAlert( state, action: PayloadAction<string> ) {
            state.visible = true
            state.type = AlertType.Failure
            state.message = action.payload
        },

        hideAlert( state ) {
            state.visible = false
        }
    }
 } )

// createSlice has generated an action creator for each of the functions in the reducers field
export const { triggerSuccessAlert, triggerFailureAlert, hideAlert } = alertSlice.actions

// this reducer is used to combine reducers in the store
export default alertSlice.reducer
