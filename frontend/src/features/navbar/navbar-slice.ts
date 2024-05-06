import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface NavBarState {
    prevScroll: number,
    visible: boolean,
    expanded: boolean
}

const initialState: NavBarState = {
    prevScroll: 0,
    visible: true,
    expanded: false
}

const navBarSlice = createSlice( { 
    name: 'navbar',
    initialState,
    reducers: {
        setVisibility( state, action: PayloadAction<boolean> ) {
            state.visible = action.payload
        },

        setPrevScroll( state, action: PayloadAction<number> ) {
            state.prevScroll = action.payload
        },

        setExpanded( state, action: PayloadAction<boolean> ) {
            state.expanded = action.payload
        }
    }
} )

export const { setVisibility, setPrevScroll, setExpanded } = navBarSlice.actions
export default navBarSlice.reducer