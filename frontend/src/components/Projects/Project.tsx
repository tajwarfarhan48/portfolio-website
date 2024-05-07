import { FC, MouseEventHandler } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { ProjectInfo } from './ProjectsGrid';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { toggleProject } from 'features/projects/projects-slice';

type ProjectProps = {
        project: ProjectInfo
}

const Project: FC<ProjectProps> = ({ project }: ProjectProps) => {
    const dispatch = useAppDispatch()
    const id = project.id

    const modalVisible = useAppSelector( state => 
        id === 'project1' ? state.projects.project1 :
        id === 'project2' ? state.projects.project2 : 
        id === 'project3' ? state.projects.project3 :
        id === 'project4' ? state.projects.project4 : 
        id === 'project5' ? state.projects.project5 :
        id === 'project6' ? state.projects.project6 :
        id === 'project7' ? state.projects.project7 :
        id === 'project8' ? state.projects.project8 :
        state.projects.project9
    )   
    
    const handleClick: MouseEventHandler = ( e ) => {
        e.stopPropagation()
        dispatch( toggleProject( id ) )
    }

    if ( modalVisible ) {
        document.getElementsByTagName('html')[0]!.classList.add( 'modal-active' )
        }

    else {
        document.getElementsByTagName('html')[0]!.classList.remove( 'modal-active' )
    }

    return (
        <>
            <div className="projectSpacer">
                <div className="projectGraphicWrapper" onClick={ handleClick }>
                    <img 
                        src={ project.image } 
                        alt="Project" 
                        className="project" 
                    />

                    <div className="projectInfo">
                            <p className="projectTitle centerText">{ project.title }</p>
                            <p className="projectDescription centerText">{ project.caption }</p>
                    </div>
                </div>
            </div>
    
            <AnimatePresence>
                { modalVisible && (
                    <motion.div 
                        initial={{
                            opacity: 0
                        }}

                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.2
                            }
                        }}

                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.2
                            }
                        }}

                        className='modal-overlay' onClick={ handleClick }
                    >
                        <motion.div 
                            initial={{
                                scale: 0
                            }}

                            animate={{
                                scale: 1,
                                transition: {
                                    type: 'spring',
                                    duration: 0.4
                                }
                            }}

                            exit={{
                                scale: 0,
                                transition: {
                                    type: 'spring',
                                    duration: 0.4
                                }
                            }}

                            className='modal' onClick={ e => e.stopPropagation() }
                        >
                                <div className="modal-info">
                                    <h1 className='modal-title'>{ project.title }</h1>

                                    <img 
                                        src={ project.image }
                                        alt="Project"
                                        className="modal-image" 
                                    />

                                    <div className="modal-links">
                                        <button className='modal-link'>
                                            <a target="_blank" href={ project.githubLink } rel="noreferrer">Project Github</a>
                                        </button>
                                        { project.devpost && ( 
                                            <button className='modal-link'>
                                                <a target="_blank" href={ project.devpostLink! } rel="noreferrer">Project Devpost</a>
                                            </button> 
                                        ) }
                                        { project.pypi && ( 
                                            <button className='modal-link'>
                                                <a target="_blank" href={ project.pypiLink! } rel="noreferrer">PyPI Page</a>
                                            </button> 
                                        ) }
                                    </div>

                                    <pre className='modal-description'>{ project.description }</pre>

                                    <button className='modal-close-btn-bottom' onClick={ handleClick }>Close Project</button>
                                </div>
                                <button className='modal-button' onClick={ handleClick }>X</button>
                        </motion.div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </>
    );
}

export default Project;