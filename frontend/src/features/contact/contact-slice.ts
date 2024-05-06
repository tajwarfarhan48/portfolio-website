import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContactState {
    name: string,
    email: string,
    message: string
}

const initialState: ContactState = {
    name: '',
    email: '',
    message: ''
}

const contactSlice = createSlice( { 
    name: 'contact',
    initialState,
    reducers: {
        setName( state, action: PayloadAction<string> ) {
            state.name = action.payload
        },

        setEmail( state, action: PayloadAction<string> ) {
            state.email = action.payload
        },

        setMessage( state, action: PayloadAction<string> ) {
            state.message = action.payload
        }
    }
} )

export const { setName, setEmail, setMessage } = contactSlice.actions 

export default contactSlice.reducer 