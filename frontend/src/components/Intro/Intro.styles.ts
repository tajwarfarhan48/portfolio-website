import styled from 'styled-components'

import introPic from 'static/img/Intro-Image.jpeg'

const IntroStyles = styled.div`
    background-color: #ffd166;
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 90vw;
    margin: 2rem auto;

    .introText {
        color: black;
        margin: 3%;

        .introTitle {
            font-size: var(  --fs-l );
            font-weight: 700;
            margin-top: 0;
        }

        .introPreambles {
            margin-bottom: 0;

            .introPreamble {
                font-weight: 400;
                font-size: var( --fs-m );
                margin-bottom: 0;
                text-align: justify;
            }
        }
    }

    .introPicContainer {
        display: flex;
        justify-content: center;

        .introPic {
            background-image: url(${introPic});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            border: 9px solid #ffd166;
        }
    }

    // For portrait tablets and down
    @media only screen and (max-width: 899px) {
        & {
            grid-template-columns: 1fr;

            .introText {
                margin: 6%;
            }
        }
    }

    // For phones only
    @media only screen and (max-width: 599px) {
        & {
            .introPicContainer {
                .introPic {
                    background-position: center;
                    aspect-ratio: 1 / 1;
                }
            }
        }
    }

    // For portrait tablets only
    @media only screen and (min-width: 600px) and (max-width: 899px) {
        & {
            .introPicContainer {
                .introPic {
                    background-position: center;
                    aspect-ratio: 16 / 9;
                }
            }
        }
    }
`

export default IntroStyles