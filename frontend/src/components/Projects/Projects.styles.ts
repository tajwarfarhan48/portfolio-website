import styled from 'styled-components'

const ProjectsStyle = styled.div`
    .projectText {
        font-size: var( --fs-l );
        font-weight: 300;
        padding: 30px 15px 15px 15px;
        color: white;
    }

    .projectsGrid {
        .projectSpacer {
            aspect-ratio: 1 / 1;
            display: flex;
            justify-content: center;
            align-items: center;
            
            .projectGraphicWrapper {
                aspect-ratio: 1 / 1;
                position: relative;
                margin: 0.5rem;
                overflow: hidden;

                .project {
                    height: 100%;
                    width: 100%;
                    filter: brightness(60%);
                    object-fit: cover;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    transition: all 0.3s linear;
                }

                .projectInfo {
                    width: 80%;
                    position: absolute;
                    bottom: 0;
                    z-index: 80;
                    left: 50%;
                    transform: translateX(-50%);

                    .projectTitle {
                        color: #ffd166;
                        letter-spacing: 1.2px;
                        font-weight: 800;
                        font-size: var( --fs-l );
                        text-shadow: 1.5px 1.5px 2px #252525 ;
                    }

                    .projectDescription {
                        color: white;
                        font-size: var(  --fs-m );
                        font-weight: 500;
                        text-shadow: 1.5px 1.5px 2px #252525 ;
                        margin-top: -20px;
                        margin-bottom: 30px;
                        padding: 0 30px;
                    }
                }

                &:hover .project,
                &:focus .project {
                    transform: scale(1.1);
                    cursor: pointer;
                    filter: brightness(80%);
                    transition: all 0.3s linear;
                }

                &:hover .projectInfo,
                &:focus .projectInfo {
                    cursor: pointer;

                    .projectTitle {
                        
                        transition: all 0.1s linear;
                    }

                    .projectDescription {
                        transition: all 0.1s linear;
                    }
                }
            }
        }

        .modal-overlay {
            z-index: 150;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba( 0, 0, 0, 0.6 );
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;

            .modal {
                position: absolute;
                margin-left: auto;
                margin-right: auto;

                width: 90vw;
                max-width: 1000px;

                max-height: 80vh;

                overflow-y: scroll;

                background-color: #181818;
                border: 2px solid #ffd166;

                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;

                .modal-info {
                    text-align: center;
                    margin: 3% 10%;

                    .modal-title {
                        color: #ffd166;
                        font-size: var( --fs-l );
                        margin-top: 1%;
                    }

                    .modal-image {
                        object-fit: contain;
                        width: 100%;
                        margin: auto;
                        aspect-ratio: 4 / 3;
                    }

                    .modal-links {
                        .modal-link {
                            border: none;
                            background-color: #ffd166;
                            font-size: var( --fs-xs );
                            font-weight: bolder;
                            border-radius: 10px;
                            padding: 0.5rem;
                            margin: 1rem 0.5rem 2rem 0.5rem;

                            &:hover {
                                cursor: pointer;
                                background-color: white;
                                transition: all 0.2s linear;
                            }

                            a {
                                text-decoration: none;
                                color: black;
                            }
                        }
                    }

                    .modal-description {
                        white-space: pre-wrap;
                        margin-top: 0;
                        color: white;
                        font-size: var( --fs-s );
                    }

                    .modal-close-btn-bottom {
                        border: none;
                        background-color: #ffd166;
                        font-size: var( --fs-xs );
                        font-weight: bolder;
                        border-radius: 10px;
                        padding: 0.5rem;
                        margin: 1rem 0.5rem 0 0.5rem;

                        &:hover {
                            cursor: pointer;
                            background-color: white;
                            transition: all 0.2s linear;
                        }
                    }
                }

                .modal-button {
                    position: absolute;
                    right: 0;
                    top: 0;
                    margin: 0.5rem;
                    border: none;
                    background-color: transparent;
                    font-size: 1.5rem;
                    color: #ffd166;
                    font-weight: bolder;

                    &:hover {
                        cursor: pointer;
                        color: white;
                        transition: all 0.2s linear;
                    }
                }
            }
        }
    }

    // For landscape tablets and up
    @media only screen and (min-width: 900px) {
        & {
            .projectsGrid {
                grid-template-columns: 1fr 1fr 1fr;

                .modal-overlay {
                    .modal {
                        .modal-info {
                            .modal-image {
                                width: 80%;
                            }
                        }
                    }
                }
            }
        }
    }
`

export default ProjectsStyle