import styled from 'styled-components'

const EducationStyles = styled.div`
    margin: 40px auto;
    max-width: min( 1100px, 95vw );
    margin: 40px auto;

    .educationText {
        font-size: var( --fs-l );
        font-weight: 300;
        color: white;
    }

    .schoolsGrid {
        .school {
            display: flex;
            flex-direction: column;
            margin-top: 30px;

            .schoolLogoContainer {
                .schoolLogo {
                    width: 270px;
                    height: 270px;
                    background-color: black;
                    border-radius: 300px;
                    margin: 20px;
                }
            }

            .schoolInfo {
                color: white;
                flex-direction: column;

                .schoolTitle {
                    font-size: var( --fs-xm );
                    color: #ffd166;
                    font-weight: 900;
                    text-align: center;
                    margin-bottom: 0;
                }

                .schoolDegree, .schoolLocation, .schoolDate, .schoolGPA {
                    font-size: var( --fs-m );
                    margin-bottom: -0.5%;
                }
            }
        }
    }

    // For landscape tablets and down
    @media only screen and (max-width: 1199px) {
        & {
            .schoolsGrid {
                .school {
                    .schoolInfo {
                        margin: 0 auto;
                    }
                }
            }
        }
    }

    // For portrait tablets and down
    @media only screen and (max-width: 899px) {
        & {
            .schoolsGrid {
                grid-template-columns: 1fr;

                .school {
                    .schoolInfo {
                        .schoolDegree, .schoolLocation, .schoolDate, .schoolGPA {
                            margin-bottom: -0.5%;
                        }
                    }
                }
            }
        }
    }

    // For phones only
    @media only screen and (max-width: 599px) {
        & {
            .schoolsGrid {
                .school {
                    .schoolLogoContainer {
                        .schoolLogo {
                            width: 75vw;
                            height: 75vw;
                        }
                    }
                }
            }
        }
    }
`

export default EducationStyles