import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProjectsState {
    project1: boolean,
    project2: boolean,
    project3: boolean,
    project4: boolean,
    project5: boolean,
    project6: boolean,
    project7: boolean 
}

const initialState: ProjectsState = {
    project1: false,
    project2: false,
    project3: false,
    project4: false,
    project5: false,
    project6: false,
    project7: false 
} 

const projectsSlice = createSlice( {
    name: 'projects',
    initialState,
    reducers: {
        hideAllProjects( state ) {
            state.project1 = false
            state.project2 = false            
            state.project3 = false
            state.project4 = false
            state.project5 = false
            state.project6 = false
            state.project7 = false             
        },

        toggleProject( state, action: PayloadAction<string> ) {
            switch ( action.payload ) {
                case 'project1': {
                    state.project1 = !(state.project1)
                    break
                }

                case 'project2': {
                    state.project2 = !(state.project2)
                    break
                }

                case 'project3': {
                    state.project3 = !(state.project3)
                    break
                }

                case 'project4': {
                    state.project4 = !(state.project4)
                    break
                }

                case 'project5': {
                    state.project5 = !(state.project5)
                    break
                }

                case 'project6': {
                    state.project6 = !(state.project6)
                    break
                }

                case 'project7': {
                    state.project7 = !(state.project7)
                    break
                }
            }
        }
    }
} )

export const { hideAllProjects, toggleProject } = projectsSlice.actions 
export default projectsSlice.reducer