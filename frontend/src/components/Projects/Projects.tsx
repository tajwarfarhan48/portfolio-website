import { FC } from 'react'

import ProjectsGrid from './ProjectsGrid'
import ProjectsStyles from './Projects.styles'

const Projects: FC = () => {
    return ( 
        <ProjectsStyles className="section" id='projects'>
            <div className="projectText centerText">
                Pet Projects
            </div>

            <ProjectsGrid />
        </ProjectsStyles>
    )
}

export default Projects