import { configureStore } from '@reduxjs/toolkit'
import alertReducer from 'features/alert/alert-slice'
import navBarReducer from 'features/navbar/navbar-slice'
import projectsReducer from 'features/projects/projects-slice'
import contactReducer from 'features/contact/contact-slice'

export const store = configureStore( {
    reducer: {
        alert: alertReducer,
        navBar: navBarReducer,
        projects: projectsReducer,
        contact: contactReducer
    }
} )

export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState>