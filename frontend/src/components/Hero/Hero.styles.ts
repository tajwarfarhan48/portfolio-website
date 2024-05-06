import styled from 'styled-components'

import profilePic from 'static/img/Hero-Image.jpeg'

const HeroStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 95vw;
    margin: auto;

    .profilePicture {
        background-image: url(${profilePic});
        width: 30rem;
        height: 30rem;
        border: 4px solid #ffd166;
        border-radius: 400px;
        margin: 40px;
        background-position: top center;
        background-size: cover;
    }

    .heroText {
        grid-area: heroText;
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;

        .heroTitle {
            color: #ffd166;
            font-size: var( --fs-xl );
            padding-bottom: 0;
            margin-bottom: -10px;
        }

        .heroDescription {
            margin-top: 0;
            padding-top: 0;
            color: white;
            font-size: var( --fs-l );
            font-weight: 200;
        }

        .heroIcon:hover {
            fill: black;
        }

        .heroLinkedinLogo {
            margin-left: 20px;
        }
    }

    // For phones and portrait tablets
    @media only screen and (max-width: 899px) {
        & {
            flex-direction: column;

            .profilePicture {
                width: 50vw;
                height: 50vw;
            }

            .heroText {
                margin-top: -12%;

                .heroTitle {
                    margin-bottom: 0px;
                    text-align: center;
                }

                .heroDescription {
                    text-align: center;
                }

                .heroIconRow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    // For phones only
    @media only screen and (max-width: 599px) {
        & {
            .profilePicture {
                width: 80vw;
                height: 80vw;
            }
        }
    }

    // For landscape tablets and up
    @media only screen and (min-width: 900px) {
        & {
            .profilePicture {
                width: 20rem;
                height: 20rem;
            }
        }
    }
`

export default HeroStyles